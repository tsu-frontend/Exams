//1
const now = new Date();

const currentDay = now.getDate();      
const currentMonth = now.getMonth() + 1;
const currentYear = now.getFullYear();  

console.log("Day:", currentDay);
console.log("Month:", currentMonth);
console.log("Year:", currentYear);


//2
let name = 'nika';
let uppercaseName = name.toUpperCase();
console.log(uppercaseName);  
document.getElementById('result').textContent=uppercaseName

//3 

localStorage.setItem("saved", "Hello everybody!");

function fn(key) {
  const value = localStorage.getItem(key);
  if (value) {
    console.log(value);
  } else {
    console.log("value for this key not found:", key);
  }
}


window.addEventListener("DOMContentLoaded", function () {
  fn("saved");
});

//4
window.onload = function () {
  alert ("განახლება წარმატებით ჩაიტვირთა!")
}

//5
let count = 1;

let timer = setInterval(() => {
  console.log(count);  
  count++;             

  if (count > 10) {
    clearInterval(timer); 
  }
}, 5000); 