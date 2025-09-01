// 1. მოცემულია მასივის ელემენტები : ana, nika, elene, diana, avtandili, nini, levani, nugzari, qetevani, zura, teona. გადაუარეთ for ციკლის ოპერატორის დახმარებით მასივს და შექმენით ახალი მასივი იმ ელემენტებისგან რომელთა სიგრძე მეტია 5-ზე.

const names = [ana, nika, elene, diana, avtandili, nini, levani, nugzari, qetevani, zura, teona];
const longNames = names.filter(name => name,length > 5); 
console.log(longNames);


// 2. წინა დავალებაში გამოცხადებულ arr მასივს დაამატეთ ელემენტი პირველ და ბოლო პოზიციაზე.

const names = ["ana", "nika", "elene", "diana", "avtandili", "nini", "levani", "nugzari", "qetevani", "zura", "teona"];
const longNames = names.filter(name => name,length > 5); 
longNames.unshift("giorgi");
longNames.push("mariami");
console.log(longNames); 


// 3.  მოცემულია მასივი arrOfAges = [15, 12, 25, 18, 20, 19 , 34, 45, 17]; მასივის ჩაშენებული ფუნქციის გამოყენებით გაფილტრეთ მასივი, გამოყავით მხოლოდ ის რიცხვები, რომელიც 18 მეტია და გამოიტანეთ კონსოლში.

const arrOfAges = [15, 12, 25, 18, 20, 19 , 34, 45, 17]; 
const over18 = arrOfAges.filter(age => age 18); 
console.log(over18); 


// 4. მოცემულია ორი მასივი:  arr1=[-2, 0, 5, 9, 1]; და arr2=[6, 3, -4, 10, 7]; ცვლადს newArray მიანიჭეთ ამ ორი მასივის შეერთებით მიღებული მასივი, დაახარისხეთ ეს მასივი კლებადობით და გამოიტანეთ თითოეული ელემენტი კონსოლში.

const arr1 = [-2, 0; 5, 9, 1]; 
const arr2 = [6, 3, -4, 10, 7]; 
const newArray = arr1.concat(arr2);
newArray.sort((a, b) => b - a); 
console.log("კლებადობით");
newArray.forEach(element => console.log(element)); 

