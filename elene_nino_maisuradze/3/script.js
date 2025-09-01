//1
document.addEventListener('DOMContentLoaded', () => {
  const names = ["ana", "nika", "elene", "diana", "avtandili", "nini", "levani", "nugzari", "qetevani", "zura", "teona"];
  const longNames = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
      longNames.push(names[i]);
    }
  }

  const ul = document.getElementById('longNamesList');

  for (let i = 0; i < longNames.length; i++) {
    const li = document.createElement('li');
    li.textContent = longNames[i];
    ul.appendChild(li);
  }
});

//2
const arr = ["ana", "nika", "elene", "diana", "avtandili", "nini", "levani", "nugzari", "qetevani", "zura", "teona"];


arr.unshift("firstElement");

arr.push("lastElement");

console.log(arr);

//3
const arrOfAges = [15, 12, 25, 18, 20, 19, 34, 45, 17];
const result = arrOfAges.filter(age => age > 18);
console.log(result);

//4
const arr1 = [-2, 0, 5, 9, 1];
const arr2 = [6, 3, -4, 10, 7];

const newArray = arr1.concat(arr2);

newArray.sort((a, b) => b - a);

newArray.forEach(element => {
  console.log(element);
});
