// 1. შექმენი ასიქნრონული ფუნქცია, რომელიც აბრუნებს Promise. 2 წამიანი
// დაყოვნების შემდეგ გამოიძახეთ resolve ფუნქცია სტრინგ მნიშვნელობით.

const returnPromise = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("lorem lorem lorem lorem"), 2000)
  );

returnPromise().then(console.log);

// 2. შექმენი ფუნქცია async-ის გამოყენებით. Await-ის გამოყენებით შეინახე წინა
// ფუნქციის შედეგი ცვლადში და გამოიტანეთ მიღებული მნიშვნელობა კონსოლში.

const myFunction = async () => console.log(await returnPromise());
myFunction();

// 3. მოცემულია API: https://jsonplaceholder.typicode.com/posts გააგზავნე მოთხოვნა
// Fetch API გამოყენებით. ასევე გააყოლე ვალიდური body. დაელოდეთ მოთხოვნის
// შედეგს, სერვერის პასუხის სტატუსი გამოიტანეთ კონსოლში.

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    userId: 20,
    id: 200,
    title: "What is Lorem Ipsum?",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }),
})
  .then((res) => res.json())
  .then(console.log);

// 4. მიიღეთ ინფორმაცია შემდეგი მისამართიდან:
// https://jsonplaceholder.typicode.com/posts?_limit=5
// გაანალიზეთ და დაბეჭდეთ მიღებული ინფორმაცია.

fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item);
    });
  });
