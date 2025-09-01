
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

document.getElementById("date").innerText = `დღე: ${day}, თვე: ${month}, წელი: ${year}`;
console.log("თარიღი:", day, month, year);


let name = "nika";
console.log("დიდი ასოებით:", name.toUpperCase());

localStorage.setItem("myText", "ეს არის შენახული ტექსტი");
let savedText = localStorage.getItem("myText");
document.getElementById("localStorageData").innerText = savedText;
console.log("localStorage:", savedText);


window.onload = function () {
    alert("გვერდი ჩაიტვირთა წარმატებით!");
};


let count = 1;
let interval = setInterval(() => {
    console.log(count);
    count++;
    if (count > 10) {
        clearInterval(interval);
    }
}, 1000);
