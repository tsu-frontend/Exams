// davaleba 1
function delayedMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2 წამის შემდეგ იმუშავა");
    }, 2000);
  });
}

delayedMessage().then(message => {
  console.log(message);
});

// davaleba 2

async function showMessage() {
  const result = await delayedMessage(); // ველოდებით პრომისის დასრულებას
  console.log("async/await შედეგი:", result);
}

showMessage();

// davaleba 3

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

// davaleba 4

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