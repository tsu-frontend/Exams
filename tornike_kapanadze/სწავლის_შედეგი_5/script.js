// 1. გამოიყენეთ getElementBy და querySelector, querySelectorAll მეთოდები
// შესაბამისი HTML ელემენტების სელექციისთვის. თითოეული ელემენტი
// გამოიტანე კონსოლში რათა დარწმუნდე რომ მოხდა სწორი ელემენტის სელექცია.

let elem1 = document.getElementById("box3");
console.log(elem1);

let elem2 = document.querySelector("#box4");
console.log(elem2);

let elements = document.querySelectorAll(".box");
console.log(elements);

// 2. Javascript გამოყენებით შეცვალეთ ნაპოვნი ელემენტების თვისებები (ტექსტის
// ან ფონის ფერი, ფონტის ზომა, დაამატე ან წაშალე კლასი და აშ.)

let gritElement = document.querySelector(".gritting");
console.log(gritElement);
gritElement.style.color = "red";
gritElement.style.fontSize = "50px";
gritElement.classList.add("newClassEded");

// 3. შექმენი ახალი პარაგრაფი, დაამატე მასში ტექსი და მოათავსე პარაგრაფი
// დოკუმენტში.

let newPara = document.createElement("p");
newPara.innerHTML = `Lorem Ipsum has been the industry's standard dummy text ever 
since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not on`;
document.body.appendChild(newPara);

// 4. ნაპოვნ ელემენტებზე დაარეგისტრირე მოვლენების მსმენელი ფუნქციები
// (მაგალითად focus, blur, change, click და აშ.) ფუნქციის საშუალებით გამოიტანე
// შესაბამისი შეტყობინება რათა დარწმუნდე რომ მსმენელი წარმატებით
// დარეგისტრირდა.

let buttonElement = document.querySelector("#btn");
console.log(buttonElement);
buttonElement.addEventListener("click", () => {
  console.log("click event registered");
});

let inputElement = document.querySelector("#fName");
console.log(inputElement);
inputElement.addEventListener("focus", () => {
  console.log("focus event registered");
});

inputElement.addEventListener("change", () => {
  console.log("change event registered");
});
