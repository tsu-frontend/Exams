// 1
const element1 = document.getElementById("h1-element");
const element2 = document.querySelector(".div-element");
const element3 = document.querySelectorAll("p");
console.log(element1);
console.log(element2);
console.log(element3);
//

// 2
element1.style.color = "blue";
element2.style.backgroundColor = "lightgray";
element3.forEach((p) => {
  p.style.fontSize = "20px";
  p.classList.add("e");
});
//

// 3
const axaliP = document.createElement("p");
axaliP.textContent = "ახალი პარაგრაფი დოკუმენტში";
document.body.appendChild(axaliP);
//

// 4
element1.addEventListener("click", () => {
  console.log("h1 ელემენტზე click დარეგისტრირდა!");
});
element2.addEventListener("mouseover", () => {
  console.log("div ელემენტზე mouseover დარეგისტრირდა");
});
const inputElement = document.querySelector("input");
inputElement.addEventListener("focus", () => {
  console.log("input ელემენტზე focus დარეგისტრირდა!");
});
//
