// შექმენი ასიქნრონული ფუნქცია, რომელიც აბრუნებს Promise. 2 წამიანი,
// დაყოვნების შემდეგ გამოიძახეთ resolve ფუნქცია სტრინგ მნიშვნელობით.

async function myAsyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("დაყოვნებიდან 2 წამში დაბრუნდა ტექსტი");
    }, 2000);
  });
}

myAsyncFunction().then((result) => {
  console.log(result);
});

async function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ეს ტექსტი დაბრუნდა 2 წამის შემდეგ");
    }, 2000);
  });
}

async function run() {
  const result = await delayedMessage(); // ველოდებით შედეგს
  console.log(result);
}

// ფუნქციის გამოძახება

// run();

// მოცემულია API: https://jsonplaceholder.typicode.com/posts გააგზავნე მოთხოვნა,
// Fetch API გამოყენებით. ასევე გააყოლე ვალიდური body. დაელოდეთ მოთხოვნის
// შედეგს, სერვერის პასუხის სტატუსი გამოიტანეთ კონსოლში.

async function sendPostRequest() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "ჩემი პოსტი",
        body: "ეს არის შინაარსი",
        userId: 1,
      }),
    });

    console.log("სტატუს კოდი:", response.status);

    const data = await response.json();
    console.log("პასუხი:", data);
  } catch (error) {
    console.error("შეცდომა მოთხოვნის დროს:", error);
  }
}

// ფუნქციის გამოძახება

sendPostRequest();


// მიიღეთ ინფორმაცია შემდეგი მისამართიდან:,
// https://jsonplaceholder.typicode.com/posts?_limit=5
// გაანალიზეთ და დაბეჭდეთ მიღებული ინფორმაცია.

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await response.json();

    console.log('მიღებული პოსტები:');
    posts.forEach(post => {
      console.log(`ID: ${post.id}`);
      console.log(`სათაური: ${post.title}`);
      console.log(`ტექსტი: ${post.body}`);
      console.log('----------------------');
    });

  } catch (error) {
    console.error('შეცდომა მოხდა:', error);
  }
}

// ფუნქციის გამოძახება 
fetchPosts();