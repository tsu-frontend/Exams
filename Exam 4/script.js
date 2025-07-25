// 4. HTML დოკუმენტის ჩატვირთვის შემდეგ გამოიტანეთ შეტყობინება.
alert("loaded");

// 1. დროისა და თარიღის ფუნქციის გამოყენებით, მიიღეთ დღევანდელი დღე და
// დაბეჭდეთ მიმდინარე რიცხვი, თვე და წელი;
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
console.log(`${day}/${month}/${year}`);

// 2. მოცემულია ცვლადი: name = `nika`. ჩაშენებული ფუნქციის დახმარებით
// გადაიყვანეთ სტრიქონი მაღალ რეგისტრში;
const name = 'nika';
const upperCaseName = name.toUpperCase();
console.log(upperCaseName);

// 3. ლოკალურ მეხსიერებაში შეინახეთ სასურველი ტექსტი. გვერდის ჩატვირთვისას
// ლოკალური მეხსიერებიდან მიიღეთ შენახული მნიშვნელობა და დაბეჭდეთ.
localStorage.setItem('myKey', 'testValue');
const retrievedValue = localStorage.getItem('myKey');
console.log(retrievedValue);

// 5. ტაიმერის ფუნქციის გამოყენებით ყოველ 1 წამში დაბეჭდეთ ზრდადი რიცხვები
// ერთიდან ათამდე.
let counter = 1;
const timerId = setInterval(function() {
    console.log(counter);
    if (counter === 10) {
        clearInterval(timerId);
    }
    counter++;
}, 1000);