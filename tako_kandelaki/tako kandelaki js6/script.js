
function delayedMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ 2 წამის შემდეგ დაბრუნდა ეს ტექსტი");
        }, 2000);
    });
}
async function showDelayedMessage() {
    const message = await delayedMessage();
    console.log("მიღებული მნიშვნელობა:", message);
}


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
