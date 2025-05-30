//1
let names = ["ana", "nika", "elene", "diana", "avtandili", "nini", "levani", "nugzari", "qetevani", "zura", "teona"];
let longNames = [];

for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
        longNames.push(names[i]);
    }
}

console.log("სიგრძე > 5 ელემენტები:", longNames);


//2
names.unshift("tamari");
names.push("giorgi");

console.log("განახლებული მასივი:", names);

//3 
let arrOfAges = [15, 12, 25, 18, 20, 19, 34, 45, 17];
let adults = arrOfAges.filter(function(age) {
  return age > 18;
});

console.log("18-ზე მეტი:", adults);

//4. 
let arr1 = [-2, 0, 5, 9, 1];
let arr2 = [6, 3, -4, 10, 7];

let newArray = arr1.concat(arr2); 
newArray.sort(function(a, b) {
  return b - a; 
});

console.log("მასივი კლებადობით:");

newArray.forEach(function(num) {
  console.log(num);
});