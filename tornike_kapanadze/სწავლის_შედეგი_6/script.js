// 1. შექმენი ასიქნრონული ფუნქცია, რომელიც აბრუნებს Promise. 2 წამიანი
// დაყოვნების შემდეგ გამოიძახეთ resolve ფუნქცია სტრინგ მნიშვნელობით.

async function muFunc1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("some text afet 2 seconds");
    }, 2000);
  });
}

muFunc1().then((result) => {
  console.log(result);
});

// 2. შექმენი ფუნქცია async-ის გამოყენებით. Await-ის გამოყენებით შეინახე წინა
// ფუნქციის შედეგი ცვლადში და გამოიტანეთ მიღებული მნიშვნელობა კონსოლში.

async function muFunct2() {
  let result = await muFunc1();
  console.log(result);
}

muFunct2();

// 3. მოცემულია API: https://jsonplaceholder.typicode.com/posts გააგზავნე მოთხოვნა
// Fetch API გამოყენებით. ასევე გააყოლე ვალიდური body. დაელოდეთ მოთხოვნის
// შედეგს, სერვერის პასუხის სტატუსი გამოიტანეთ კონსოლში.

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userId: "20",
    id: "200",
    title: "Some title",
    body: "accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestia",
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// 4. მიიღეთ ინფორმაცია შემდეგი მისამართიდან:
// https://jsonplaceholder.typicode.com/posts?_limit=5
// გაანალიზეთ და დაბეჭდეთ მიღებული ინფორმაცია.

fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((item) => {
      console.log(item);
    });
  });
