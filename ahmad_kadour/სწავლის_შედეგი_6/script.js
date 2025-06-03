// 1
async function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ჰაი");
    }, 2000);
  });
}
//

// 2
async function displayMessage() {
  const message = await asyncFunction();
  console.log(message);
}
// displayMessage();
//

// 3
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "HI",
      }),
    });

    console.log("response status:", response.status);
  } catch (error) {
    console.error(error);
  }
}
fetchPosts();
//

// 4
async function ffff() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?limit=5");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

ffff().then((data) => {
  data.slice(0, 5).forEach((element) => {
    const p = document.createElement("p");
    p.textContent = `id: ${element.id}, title: ${element.title}`;
    document.body.appendChild(p);
  });
});
//
