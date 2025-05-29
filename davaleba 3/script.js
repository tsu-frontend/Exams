// davaleba 1
const names = ["ana", "nika", "elene", "diana", "avtandili", "nini", "levani", "nugzari", "qetevani", "zura", "teona"];
const longNames = [];

for (let i = 0; i < names.length; i++) {
  if (names[i].length > 5) {
    longNames.push(names[i]);
  }
}

console.log(longNames);

// davaleba 2

names.unshift('tamari');

names.push('dachi');

// davaleba 3
let arrOfAges = [15, 12, 25, 18, 20, 19 , 34, 45, 17];

const result = arrOfAges.filter(checkAge)

function checkAge(age){
    return age >=18
}

console.log(result)

// davaleba 4

const arr1 = [-2, 0, 5, 9, 1];
const arr2 = [6, 3, -4, 10, 7];

const newArray = arr1.concat(arr2);

newArray.sort(function(a, b) {
  return b - a;
});

for (let i of newArray){
    console.log(i)
}
