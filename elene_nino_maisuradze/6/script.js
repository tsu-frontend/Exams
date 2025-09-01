async function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hi, Have nice day! Good luck");
    }, 2000);
  });
}

delayedMessage().then((message) => {
  document.getElementById("output").textContent = message;
});

//2
async function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("You can do anything");
    }, 2000);
  });
}
async function showMessage() {
  const result = await getMessage(); 
  console.log(result); 
}


showMessage();

//3 

async function sendPostRequest() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        console.log('Response status:', response.status);

        const jsonResponse = await response.json();
        console.log('Response JSON:', jsonResponse);

    } catch (error) {
        console.error('Error:', error);
    }
}

sendPostRequest();

//4
async function getPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); 

    console.log('Received Posts:');
    data.forEach((post, index) => {
      console.log(`\nPost #${index + 1}`);
      console.log(`ID: ${post.id}`);
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
    });

  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

getPosts();