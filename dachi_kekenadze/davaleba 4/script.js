// davaleba 1
const today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

console.log("დღე:", day);
console.log("თვე:", month);
console.log("წელი:", year);

// davaleba 2

const name = "nika";

const upperName = name.toUpperCase();

console.log(upperName);

// davaleba 3

localStorage.setItem('myText', 'ეს არის ჩემი შენახული ტექსტი');

window.onload = function() {
  const savedText = localStorage.getItem('myText');
  console.log('ლოკალურ მეხსიერებაში შენახული ტექსტი:', savedText);
}

// davaleba 4

window.onload = function() {
    alert("გვერდი ჩაიტვირთა!");
  };

// davaleba 5

let count = 1;
const intervalId = setInterval(() => {
  console.log(count);
  count++;

  if (count > 10) {
    clearInterval(intervalId); // შევაჩეროთ ტაიმერი როცა count 10-ს გადააჭარბებს
  }
}, 1000);