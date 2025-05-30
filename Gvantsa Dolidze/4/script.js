// 1. დროისა და თარიღის ფუნქციის გამოყენებით, მიიღეთ დღევანდელი დღე და
// დაბეჭდეთ მიმდინარე რიცხვი, თვე და წელი;

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
console.log(today);
console.log(`${day}.${month}.${year}`);

// 2. მოცემულია ცვლადი: name = `nika`. ჩაშენებული ფუნქციის დახმარებით
// გადაიყვანეთ სტრიქონი მაღალ რეგისტრში;

const name1 = "nika";
const upperCase = name1.toUpperCase();
console.log(upperCase);

// 3. ლოკალურ მეხსიერებაში შეინახეთ სასურველი ტექსტი. გვერდის ჩატვირთვისას
// ლოკალური მეხსიერებიდან მიიღეთ შენახული მნიშვნელობა და დაბეჭდეთ.

localStorage.setItem("myText", "HELLO...!!!");
const savedText = localStorage.getItem("myText");
if (savedText) {
  console.log(savedText);
} else {
  console.log("local storage is empty");
}

// 4. HTML დოკუმენტის ჩატვირთვის შემდეგ გამოიტანეთ შეტყობინება.
alert("გვერდი ჩაიტვირთა წარმატებით!");

// 5. ტაიმერის ფუნქციის გამოყენებით ყოველ 1 წამში დაბეჭდეთ ზრდადი რიცხვები
// ერთიდან ათამდე.

let counter = 1;
const interval = setInterval(() => {
  console.log(counter);

  if (counter === 10) {
    clearInterval(interval);
  }
  counter++;
}, 2000);
