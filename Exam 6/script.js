// 1. შექმენი ასიქნრონული ფუნქცია, რომელიც აბრუნებს Promise. 2 წამიანი
// დაყოვნების შემდეგ გამოიძახეთ resolve ფუნქცია სტრინგ მნიშვნელობით.
function createDelayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("promise resolved");
    }, 2000);
  });
}

// 2. შექმენი ფუნქცია async-ის გამოყენებით. Await-ის გამოყენებით შეინახე წინა
// ფუნქციის შედეგი ცვლადში და გამოიტანეთ მიღებული მნიშვნელობა კონსოლში.
async function consumePromise() {
  const result = await createDelayedPromise();
  console.log(result);
}

// 3. მოცემულია API: https://jsonplaceholder.typicode.com/posts გააგზავნე მოთხოვნა
// Fetch API გამოყენებით. ასევე გააყოლე ვალიდური body. დაელოდეთ მოთხოვნის
// შედეგს, სერვერის პასუხის სტატუსი გამოიტანეთ კონსოლში.
async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "test title",
        body: "test body",
        userId: 1,
      }),
    });
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// 4. მიიღეთ ინფორმაცია შემდეგი მისამართიდან:
// https://jsonplaceholder.typicode.com/posts?_limit=5
// გაანალიზეთ და დაბეჭდეთ მიღებული ინფორმაცია.
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

consumePromise();
postData();
fetchData();