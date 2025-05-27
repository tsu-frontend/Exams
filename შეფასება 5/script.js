let title = document.getElementById("mainTitle");
console.log("getElementById", title);

let firstPharagraph = document.querySelector("description");
console.log("querySelector (firstparagraph):", firstPharagraph);

let allPharagraphs = document.querySelectorAll("description");
console.log("querySelectorAll:", allPharagraphs);

//2
title.style.color = "blue";
title.style.fontSize = "20px";
title.classList.add("highlight");

allParagraphs[1].classList.remove("description");

//3
let newPara = document.createElement("p");
newPara.textContent = "ეს არის ახალი პარაგრაფი, შექმნილი JavaScript-ით.";
newPara.style.color = "green";
document.getElementById("newParagraphContainer").appendChild(newPara);

//4
let inputField = document.getElementById("inputField");
let button = document.getElementById("myButton");


inputField.addEventListener("focus", function() {
    console.log("Input field focused");
  });

  inputField.addEventListener("blur", function() {
    console.log("Input field blurred");
  });

  inputField.addEventListener("change", function() {
    console.log("Input value changed:", inputField.value);
  });

  button.addEventListener("click", function() {
    alert("ღილაკზე დააწკაპეთ!");
  });
