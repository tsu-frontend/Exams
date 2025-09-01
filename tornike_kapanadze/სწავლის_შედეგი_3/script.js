// 1. მოცემულია მასივის ელემენტები : ana, nika, elene, diana, avtandili, nini, levani,
// nugzari, qetevani, zura, teona. გადაუარეთ for ციკლის ოპერატორის დახმარებით
// მასივს და შექმენით ახალი მასივი იმ ელემენტებისგან რომელთა სიგრძე მეტია 5-
// ზე.
let array = [
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

let newArray1 = [];

array.forEach((element) => {
  if (element.length > 5) {
    newArray1.push(element);
  }
});

console.log(newArray1);

// 2. წინა დავალებაში გამოცხადებულ arr მასივს დაამატეთ ელემენტი პირველ და
// ბოლო პოზიციაზე.
newArray1.push("last element");
newArray1.unshift("first element");

console.log(newArray1);

// 3. მოცემულია მასივი arrOfAges = [15, 12, 25, 18, 20, 19 , 34, 45, 17]; მასივის
// ჩაშენებული ფუნქციის გამოყენებით გაფილტრეთ მასივი, გამოყავით მხოლოდ ის
// რიცხვები, რომელიც 18 მეტია და გამოიტანეთ კონსოლში.

let arrOfAges = [15, 12, 25, 18, 20, 19, 34, 45, 17];

let result = arrOfAges.filter((item) => {
  return item > 18;
});

console.log(result);

// 4. მოცემულია ორი მასივი: arr1=[-2, 0, 5, 9, 1]; და arr2=[6, 3, -4, 10, 7]; ცვლადს
// newArray მიანიჭეთ ამ ორი მასივის შეერთებით მიღებული მასივი, დაახარისხეთ ეს
// მასივი კლებადობით და გამოიტანეთ თითოეული ელემენტი კონსოლში.

let arr1 = [-2, 0, 5, 9, 1];
let arr2 = [6, 3, -4, 10, 7];

let newArray2 = arr1.concat(arr2);
console.log(newArray2);

let desc = newArray2.sort((a, b) => {
  return b - a;
});

console.log(desc);
