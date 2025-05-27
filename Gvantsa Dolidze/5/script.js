// 1. გამოიყენეთ getElementBy და querySelector, querySelectorAll მეთოდები
// შესაბამისი HTML ელემენტების სელექციისთვის. თითოეული ელემენტი
// გამოიტანე კონსოლში რათა დარწმუნდე რომ მოხდა სწორი ელემენტის სელექცია.
const title = document.getElementById("title");
const paragraph = document.querySelector("#paragraph");
const all = document.querySelectorAll(".demo");
console.log(title);
console.log(paragraph);
console.log(all);

// 2. Javascript გამოყენებით შეცვალეთ ნაპოვნი ელემენტების თვისებები (ტექსტის
// ან ფონის ფერი, ფონტის ზომა, დაამატე ან წაშალე კლასი და აშ.)
title.innerText = "Hello World";
paragraph.style.backgroundColor = "red";
title.classList.remove("demo");

// 3. შექმენი ახალი პარაგრაფი, დაამატე მასში ტექსი და მოათავსე პარაგრაფი
// დოკუმენტში.

function createParagraph() {
  const newParagraph = document.createElement("p");
  newParagraph.innerText = "This is a dynamically created paragraph!";
  document.body.appendChild(newParagraph);
}
createParagraph();

// 4. ნაპოვნ ელემენტებზე დაარეგისტრირე მოვლენების მსმენელი ფუნქციები
// (მაგალითად focus, blur, change, click და აშ.) ფუნქციის საშუალებით გამოიტანე
// შესაბამისი შეტყობინება რათა დარწმუნდე რომ მსმენელი წარმატებით
// დარეგისტრირდა.

title.addEventListener("click", function () {
  console.log("Click event triggered on the title element!");
});
