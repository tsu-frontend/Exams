//1

let age1 = 16;
let age2 = 21;

let result1 = age1 >= 18 ? "პირველი პირი სრულწლოვანია." : "პირველი პირი არ არის სრულწლოვანი.";
let result2 = age2 >= 18 ? "მეორე პირი სრულწლოვანია." : "მეორე პირი არ არის სრულწლოვანი.";

console.log(result1);
console.log(result2);

//2. 
const evenList = document.getElementById("evenNumbers");
for (let i = 1; i<= 10; i++) {
 if (i% 2 === 0){
    let li = document.createElement("li");
    li.textContent=i;
    evenList.appendChild(li);
 }
}

//3
 function showMessage(){
   alert("You are welcome! You clicked the button.");

 }

 //4
function logInput(value) {
 console.log("Input შეყვანილია:", value);
  }
