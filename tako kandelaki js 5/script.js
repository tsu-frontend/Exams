const title = document.getElementById("page-title");
const paragraph = document.querySelector(".text");
const allParagraphs = document.querySelectorAll("p");
const button = document.querySelector("#click-button");
const input = document.getElementById("name-input");

console.log(title);
console.log(paragraph);
console.log(allParagraphs);
console.log(button);
console.log(input);

title.style.color = "blue";
paragraph.style.backgroundColor = "#d2f4ea";
paragraph.style.fontSize = "20px";
input.placeholder = "შეიყვანეთ თქვენი სრული სახელი";

const newPara = document.createElement("p");
newPara.textContent = "ეს არის ახალით დამატებული პარაგრაფი.";
document.body.appendChild(newPara);

button.addEventListener("click", () => {
    alert("ღილაკი დაჭერილია!");
  });
  
  input.addEventListener("focus", () => {
    console.log("ინპუტზე ფოკუსირებულია");
  });
  
  input.addEventListener("blur", () => {
    console.log("ინპუტიდან ფოკუსი მოიხსნა");
  });
  
  input.addEventListener("change", () => {
    console.log("ინპუტის მნიშვნელობა შეიცვალა:", input.value);
  });