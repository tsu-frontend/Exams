// 1. დროისა და თარიღის ფუნქციის გამოყენებით, მიიღეთ დღევანდელი დღე და
// დაბეჭდეთ მიმდინარე რიცხვი, თვე და წელი;

let date = new Date();

let day = date.getDate();
let mont = date.getMonth();
let year = date.getFullYear();

console.log(`${day}/${mont + 1}/${year}`);

// 2. მოცემულია ცვლადი: name = `nika`. ჩაშენებული ფუნქციის დახმარებით
// გადაიყვანეთ სტრიქონი მაღალ რეგისტრში;

let firstName = "nika";
console.log(firstName.toUpperCase());

// 3. ლოკალურ მეხსიერებაში შეინახეთ სასურველი ტექსტი. გვერდის ჩატვირთვისას
// ლოკალური მეხსიერებიდან მიიღეთ შენახული მნიშვნელობა და დაბეჭდეთ.

localStorage.setItem("newText", "some text random text");
let result = localStorage.getItem("newText");
console.log(result);

// 4. HTML დოკუმენტის ჩატვირთვის შემდეგ გამოიტანეთ შეტყობინება.

alert("new message");

// 5. ტაიმერის ფუნქციის გამოყენებით ყოველ 1 წამში დაბეჭდეთ ზრდადი რიცხვები
// ერთიდან ათამდე.

let numebr = 1;

setInterval(() => {
  if (numebr > 10) {
    return;
  }
  console.log(numebr);
  numebr++;
}, 1000);
