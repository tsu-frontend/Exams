// 1. დროისა და თარიღის ფუნქციის გამოყენებით, მიიღეთ დღევანდელი დღე და დაბეჭდეთ მიმდინარე რიცხვი, თვე და წელი;

const today = new Date();
const day = today.getDate();
const monthIndex = today.getMonth();
const year = today.getFullYear();

const months = ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"];

const monthName = months[monthIndex];
console.log(`${day} ${monthName} ${year} წელი`);

// 2. მოცემულია ცვლადი: name = `nika`.  ჩაშენებული ფუნქციის დახმარებით გადაიყვანეთ სტრიქონი მაღალ რეგისტრში;

let name = "nika";
let upperName = name.toUpperCase();
console.log(upperName);

// 3.  ლოკალურ მეხსიერებაში შეინახეთ სასურველი ტექსტი. გვერდის ჩატვირთვისას ლოკალური მეხსიერებიდან მიიღეთ შენახული მნიშვნელობა და დაბეჭდეთ.

localStorage.setItem("myText", "გამარჯობა!");

const savedText = localStorage.getItem("myText");

console.log(savedText);

// 4. HTML დოკუმენტის ჩატვირთვის შემდეგ გამოიტანეთ შეტყობინება.
document.addEventListener("DOMContentLoaded", function () {
  alert("გვერდი ჩაიტვირთა!");
});

// 5.  ტაიმერის ფუნქციის გამოყენებით ყოველ 1 წამში დაბეჭდეთ ზრდადი რიცხვები ერთიდან ათამდე.

let counter = 1;

const intervalId = setInterval(() => {
  console.log(counter);

  if (counter === 10) {
    clearInterval(intervalId);
  }

  counter++;
}, 1000);
