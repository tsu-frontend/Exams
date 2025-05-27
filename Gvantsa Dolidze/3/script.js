// 1. მოცემულია მასივის ელემენტები : ana, nika, elene, diana, avtandili, nini, levani,
// nugzari, qetevani, zura, teona. გადაუარეთ for ციკლის ოპერატორის დახმარებით
// მასივს და შექმენით ახალი მასივი იმ ელემენტებისგან რომელთა სიგრძე მეტია 5-
// ზე.

const names = [
  "ana",
  "nika",
  "elene",
  "diana",
  "avtandili",
  "nini",
  "levani",
  "nugzari",
  "qetevani",
  "zura",
  "teona",
];

for (let i = 0; i < names.length; i++) {
  if (names[i].length > 5) {
    console.log(names[i]);
  }
}

// 2. წინა დავალებაში გამოცხადებულ arr მასივს დაამატეთ ელემენტი პირველ და
// ბოლო პოზიციაზე.
names.push("saba");
names.unshift("giorgi");
console.log(names);

// 3. მოცემულია მასივი arrOfAges = [15, 12, 25, 18, 20, 19 , 34, 45, 17]; მასივის
// ჩაშენებული ფუნქციის გამოყენებით გაფილტრეთ მასივი, გამოყავით მხოლოდ ის
// რიცხვები, რომელიც 18 მეტია და გამოიტანეთ კონსოლში.

const arrOfAges = [15, 12, 25, 18, 20, 19, 34, 45, 17];
const over18 = arrOfAges.filter((age) => age > 18);
console.log(over18);

// 4. მოცემულია ორი მასივი: arr1=[-2, 0, 5, 9, 1]; და arr2=[6, 3, -4, 10, 7]; ცვლადს
// newArray მიანიჭეთ ამ ორი მასივის შეერთებით მიღებული მასივი, დაახარისხეთ ეს
// მასივი კლებადობით და გამოიტანეთ თითოეული ელემენტი კონსოლში.

const arr1 = [-2, 0, 5, 9, 1];
const arr2 = [6, 3, -4, 10, 7];

const newArray = arr1.concat(arr2);
newArray.sort((a, b) => b - a);
newArray.forEach((num) => {
  console.log(num);
});
