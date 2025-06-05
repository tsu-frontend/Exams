//1
function delayFunction() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("2 წამის შემდეგ შესრულდა Promise");
      }, 2000);
    });
  }

  //2
  async function useDelayFunction() {
    const result = await delayFunction(); 
    console.log(result); 
  }
  
  useDelayFunction();


  //3

  async function sendPostRequest() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "ჩემი პოსტი",
        body: "ეს არის ტექსტი პოსტისთვის",
        userId: 1
      })
    });
  
    console.log("სტატუს კოდი:", response.status);
  }
  
  sendPostRequest();

  //4

  async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await response.json();
  
    console.log("პირველი 5 პოსტი:");
    data.forEach(post => {
      console.log(`ID: ${post.id}, სათაური: ${post.title}`);
    });
  }
  
  fetchPosts();

  