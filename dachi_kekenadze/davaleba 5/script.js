// davaleba 1
const title = document.getElementById("main-title");
console.log(title);

const firstDiv = document.querySelector("div");
console.log(firstDiv);

const allParagraphs = document.querySelectorAll(".text");

allParagraphs.forEach(p => console.log(p));

// davaleba 2

title.style.color = "white";
title.style.backgroundColor = "green";

allParagraphs.forEach(p => {
  p.style.color = "blue";
  p.style.backgroundColor = "lightgray";
});

// davaleba 3

let newParagraph = document.createElement("p");
newParagraph.textContent = "ეს არის ახალი პარაგრაფი"
const body = document.body
body.appendChild(newParagraph)

// davaleba 4

const input = document.getElementById("myInput");
const button = document.getElementById("myButton");

input.addEventListener("focus", function() {
  console.log("Input-მა მიიღო focus!");
});

input.addEventListener("blur", function() {
  console.log("Input-მა დაკარგა focus!");
});

button.addEventListener("click", function() {
  console.log("ღილაკზე დააწკაპეს!");
});