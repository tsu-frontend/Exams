// შექმენი ასიქნრონული ფუნქცია, რომელიც აბრუნებს Promise. 2 წამიანი დაყოვნების შემდეგ გამოიძახეთ resolve ფუნქცია სტრინგ მნიშვნელობით.

async function myAsyncFunction() {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done after 2 seconds");
    }, 2000);
  });

  console.log(result);
}

myAsyncFunction();

//   შექმენი ფუნქცია async-ის  გამოყენებით. Await-ის გამოყენებით შეინახე  წინა ფუნქციის შედეგი ცვლადში და გამოიტანეთ მიღებული მნიშვნელობა კონსოლში.
function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello after 2 seconds");
    }, 2000);
  });
}

async function showMessage() {
  const result = await getMessage();
  console.log(result);
}

showMessage();

//   . მოცემულია API: https://jsonplaceholder.typicode.com/posts გააგზავნე მოთხოვნა Fetch API  გამოყენებით. ასევე გააყოლე ვალიდური body. დაელოდეთ მოთხოვნის შედეგს,  სერვერის პასუხის სტატუსი გამოიტანეთ კონსოლში.

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "test",
    body: "this is a post",
    userId: 1,
  }),
})
  .then((response) => {
    console.log("Status code:", response.status);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//   4. მიიღეთ ინფორმაცია შემდეგი მისამართიდან: https://jsonplaceholder.typicode.com/posts?_limit=5
// გაანალიზეთ და დაბეჭდეთ მიღებული ინფორმაცია.

fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
