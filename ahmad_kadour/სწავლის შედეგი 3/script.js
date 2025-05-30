// 1
const names = ["ana", "nika", "elene", "diana", "avtandili", "nini", "levani", "nugzari", "qetevani", "zura", "teona"];

const longNames = [];
for (let i = 0; i < names.length; i++) {
  if (names[i].length > 5) {
    longNames.push(names[i]);
  }
}
console.log(longNames);
//

// 2
longNames.unshift("ელემენტი");
longNames.push("ელემენტი");
console.log(longNames);
//

// 3
const arrOfAges = [15, 12, 25, 18, 20, 191, 34, 45, 17];
const filteredAges = arrOfAges.filter((age) => age > 18);
console.log(filteredAges);
//

// 4
const arr1 = [-2, 0, 5, 9, 1];
const arr2 = [6, 3, 4, 10, 7];
const newArray = arr1.concat(arr2).sort((a, b) => b - a);
newArray.forEach((element) => console.log(element));
//
