import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from googleapiclient.errors import HttpError
import base64

SHARED_DRIVE_ID = '0AB0RNCuKw3HUUk9PVA'
TARGET_FOLDER_NAME = 'javascript-exams'

# =============== AUTHENTICATION SECTION =================
# service-account.json is downloaded from google cloud console drive api

# Decode and write service account credentials

# creds_json = base64.b64decode(os.environ['GOOGLE_APPLICATION_CREDENTIALS']).decode('utf-8')
# with open('service-account.json', 'w') as f:
#     f.write(creds_json)

# =============== END AUTHENTICATION =================


# Set up credentials
credentials = service_account.Credentials.from_service_account_file(
    'service-account.json',
    scopes=['https://www.googleapis.com/auth/drive.file']
)

# Build the Drive API service
service = build('drive', 'v3', credentials=credentials)

root_folder_metadata = {
    'name': TARGET_FOLDER_NAME,
    'mimeType': 'application/vnd.google-apps.folder',
    'parents': [SHARED_DRIVE_ID]
}
root_folder = service.files().create(body=root_folder_metadata, fields='id', supportsAllDrives=True).execute()


# Upload to Google Drive
def upload_folder(folder_path, parent_id):
    try:
        # Upload contents
        for item in os.listdir(folder_path):
            item_path = os.path.join(folder_path, item)
            if os.path.isdir(item_path):
                folder_metadata = {
                    'name': item,
                    'mimeType': 'application/vnd.google-apps.folder',
                    'parents': [parent_id]
                }
                new_folder = service.files().create(body=folder_metadata, fields='id', supportsAllDrives=True).execute()
                upload_folder(item_path, new_folder['id'])
            else:
                file_metadata = {
                    'name': item,
                    'parents': [parent_id]
                }
                media = MediaFileUpload(
                    item_path,
                    resumable=True
                )
                service.files().create(
                    body=file_metadata,
                    media_body=media,
                    fields='id',
                    supportsAllDrives=True
                ).execute()
                print(f"Uploaded file: {item}")
    except HttpError as error:
        print(f"An error occurred: {error}")
        raise


# Process each branch
for branch in os.popen('git branch -r | grep -v "\\->" | grep -v "HEAD"').read().splitlines():
    branch = branch.strip()
    clean_branch = branch.replace('origin/', '')
    print(f"Processing branch: {clean_branch}")
    
    # Checkout branch
    os.system(f'git checkout -f "{clean_branch}"')
    
    for item in os.listdir('.'):
        if os.path.isdir(item) and item not in ['.git', '.venv', '.github']:
            print(f"Uploading {item} from {clean_branch}")

            student_folder_metadata = {
                'name': item,
                'mimeType': 'application/vnd.google-apps.folder',
                'parents': [root_folder['id']]
            }
            student_folder = service.files().create(body=student_folder_metadata, fields='id', supportsAllDrives=True).execute()            
            
            upload_folder(item, student_folder['id'])
