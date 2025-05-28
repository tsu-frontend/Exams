
let names = ["ana", "nika", "elene", "diana", "avtandili", "nini", "levani", "nugzari", "qetevani", "zura", "teona"];
let filteredNames = [];

for (let i = 0; i < names.length; i++) {
  if (names[i].length > 5) {
    filteredNames.push(names[i]);
  }
}

console.log("სიგრძით >5:", filteredNames);


filteredNames.unshift("firstName");
filteredNames.push("lastName");
console.log("დამატებული ელემენტები:", filteredNames);

let arrOfAges = [15, 12, 25, 18, 20, 19, 34, 45, 17];
let adults = arrOfAges.filter(age => age > 18);
console.log("18-ზე მეტი ასაკი:", adults);


let arr1 = [-2, 0, 5, 9, 1];
let arr2 = [6, 3, -4, 10, 7];
let newArray = arr1.concat(arr2);

newArray.sort((a, b) => b - a); 
console.log("დასორტირებული მასივი:");
newArray.forEach(num => console.log(num));

  