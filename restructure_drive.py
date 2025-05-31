#!/usr/bin/env python3

import os
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import base64

# Configuration
SHARED_DRIVE_ID = "0AB0RNCuKw3HUUk9PVA"  # Your shared drive ID
TARGET_FOLDER_NAME = "javascript-exams"   # The folder name within the shared drive

def get_service():
    # Decode and write service account credentials
    creds_json = base64.b64decode(os.environ['GOOGLE_APPLICATION_CREDENTIALS']).decode('utf-8')
    with open('service-account.json', 'w') as f:
        f.write(creds_json)

    # Set up credentials
    credentials = service_account.Credentials.from_service_account_file(
        'service-account.json',
        scopes=['https://www.googleapis.com/auth/drive.file']
    )

    # Build the Drive API service
    return build('drive', 'v3', credentials=credentials)

def find_folder(service, name, parent_id=None):
    """Find a folder by name and parent ID."""
    query = f"name = '{name}' and mimeType = 'application/vnd.google-apps.folder'"
    if parent_id:
        query += f" and '{parent_id}' in parents"
    
    results = service.files().list(
        q=query,
        spaces='drive',
        corpora='drive',
        driveId=SHARED_DRIVE_ID,
        includeItemsFromAllDrives=True,
        supportsAllDrives=True,
        fields='files(id, name)'
    ).execute()
    
    return results.get('files', [])

def move_file(service, file_id, new_parent_id):
    """Move a file to a new parent folder."""
    # Get the current parents
    file = service.files().get(
        fileId=file_id,
        fields='parents',
        supportsAllDrives=True
    ).execute()
    
    previous_parents = ",".join(file.get('parents', []))
    
    # Move the file
    service.files().update(
        fileId=file_id,
        addParents=new_parent_id,
        removeParents=previous_parents,
        supportsAllDrives=True,
        fields='id, parents'
    ).execute()

def delete_folder(service, folder_id):
    """Delete a folder and all its contents."""
    try:
        service.files().delete(
            fileId=folder_id,
            supportsAllDrives=True
        ).execute()
        print(f"Deleted folder: {folder_id}")
    except HttpError as error:
        print(f"Error deleting folder {folder_id}: {error}")

def main():
    service = get_service()
    
    # Find the target folder
    target_folders = find_folder(service, TARGET_FOLDER_NAME, SHARED_DRIVE_ID)
    if not target_folders:
        print(f"Target folder '{TARGET_FOLDER_NAME}' not found!")
        return
    
    target_folder = target_folders[0]
    print(f"Found target folder: {target_folder['name']} (ID: {target_folder['id']})")
    
    # Find all student folders
    student_folders = find_folder(service, "exams", target_folder['id'])
    if not student_folders:
        print("No student folders found!")
        return
    
    exams_folder = student_folders[0]
    print(f"Found exams folder: {exams_folder['name']} (ID: {exams_folder['id']})")
    
    # Get all student folders
    student_folders = service.files().list(
        q=f"'{exams_folder['id']}' in parents and mimeType = 'application/vnd.google-apps.folder'",
        spaces='drive',
        corpora='drive',
        driveId=SHARED_DRIVE_ID,
        includeItemsFromAllDrives=True,
        supportsAllDrives=True,
        fields='files(id, name)'
    ).execute().get('files', [])
    
    print(f"\nFound {len(student_folders)} student folders")
    
    # Move each student folder to the target folder
    for student_folder in student_folders:
        print(f"\nProcessing student folder: {student_folder['name']}")
        
        # Get the inner student folder
        inner_folders = service.files().list(
            q=f"'{student_folder['id']}' in parents and mimeType = 'application/vnd.google-apps.folder'",
            spaces='drive',
            corpora='drive',
            driveId=SHARED_DRIVE_ID,
            includeItemsFromAllDrives=True,
            supportsAllDrives=True,
            fields='files(id, name)'
        ).execute().get('files', [])
        
        if inner_folders:
            inner_folder = inner_folders[0]
            print(f"Moving inner folder: {inner_folder['name']}")
            move_file(service, inner_folder['id'], target_folder['id'])
    
    # Delete the empty exams folder
    print("\nCleaning up...")
    delete_folder(service, exams_folder['id'])
    delete_folder(service, student_folder['id'])
    
    print("\nRestructuring complete!")

if __name__ == "__main__":
    main() 