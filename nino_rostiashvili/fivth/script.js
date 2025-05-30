// 1. გამოიყენეთ getElementBy და querySelector, querySelectorAll მეთოდები შესაბამისი HTML ელემენტების სელექციისთვის. თითოეული ელემენტი გამოიტანე კონსოლში  რათა დარწმუნდე რომ მოხდა სწორი ელემენტის სელექცია.

const title = document.getElementById(`main-title`);
console.log(`getElementById:`, title);

const paragraphs = document.getElementsByClassName(`text`);
console.log(`getElementsByClassName:` paragraphs); 


const firstParagraph = document.querySelector('.text');
console.log('querySelector:', firstParagraph);

const allTextParagraphs = document.querySelectorAll('.text');
console.log('querySelectorAll:', allTextParagraphs);



// 2. Javascript გამოყენებით შეცვალეთ ნაპოვნი ელემენტების თვისებები (ტექსტის ან ფონის ფერი, ფონტის ზომა, დაამატე ან წაშალე კლასი და აშ.)

const title = document.getElemetById(`main-title`); 
const.style.color = `darkblue`;
title.style.backgroundColor = `yellow`;
title.style.fontSize = '36px';





// 3. შექმენი ახალი პარაგრაფი, დაამატე მასში ტექსი და მოათავსე პარაგრაფი დოკუმენტში.

const newParagraph = document.createElement("p");
newParagraph.textContent = "პარაგრაფი";
document.body.appendChild(newParagraph);



// 4. ნაპოვნ ელემენტებზე დაარეგისტრირე მოვლენების მსმენელი ფუნქციები (მაგალითად focus, blur, change, click  და აშ.) ფუნქციის საშუალებით გამოიტანე შესაბამისი შეტყობინება რათა დარწმუნდე რომ მსმენელი წარმატებით დარეგისტრირდა.
const input = document.getElementById("myInput");
const select = document.getElementById("mySelect");
const button = document.getElementById("myButton");


input.addEventListener("focus", function () {
    console.log("Input got focus");
  });
  
  
  input.addEventListener("blur", function () {
    console.log("Input lost focus");
  });
  

  select.addEventListener("change", function () {
    console.log("You selected:", select.value);
  });
  

  button.addEventListener("click", function () {
    console.log("Button was clicked");
  });
 

  