// davaleba 3

// let names = ["ana", "nika", "elene", "diana", "avtandili", "nini", "levani", "nugzari", "qetevani", "zura", "teona"];
// let longNames = [];

// for (let i = 0; i < names.length; i++) {
//   if (names[i].length > 5) {
//     longNames.push(names[i]);
//   }
// }

// console.log("სახელები, რომელთა სიგრძე მეტია 5-ზე:", longNames);


// წინა დავალებაში გამოცხადებულ arr მასივს დაამატეთ ელემენტი პირველ და,
// ბოლო პოზიციაზე.

// let arr = ["ana", "nika", "elene", "diana", "avtandil", "nini", "levani", "nugzari", "qetevani", "zura", "teona"];

// arr.unshift("გიორგი");

// arr.push("სალომე");

// console.log(arr);

// მოცემულია მასივი arrOfAges = [15, 12, 25, 18, 20, 19 , 34, 45, 17]; მასივის ჩაშენებული ფუნქციის გამოყენებით გაფილტრეთ მასივი, გამოყავით მხოლოდ ის
// რიცხვები, რომელიც 18 მეტია და გამოიტანეთ კონსოლში.


// let arrOfAges = [15, 12, 25, 18, 20, 19, 34, 45, 17];
// let over18 = arrOfAges.filter(function (age) {
// return age >18;
// });
// console.log("რიცხვები, რომლებიც 18-ზე მეტია:", over18);

// მოცემულია ორი მასივი: arr1=[-2, 0, 5, 9, 1]; და arr2=[6, 3, -4, 10, 7]; ცვლადს,
// newArray მიანიჭეთ ამ ორი მასივის შეერთებით მიღებული მასივი, დაახარისხეთ ეს
// მასივი კლებადობით და გამოიტანეთ თითოეული ელემენტი კონსოლში.


// let arr1 = [-2, 0, 5, 9, 1];
// let arr2 = [6, 3, -4, 10, 7];
// let newArray = arr1.concat(arr2);

// newArray.sort((a, b) => b - a); 
// console.log("დასორტირებული მასივი:");
// newArray.forEach(num => console.log(num));