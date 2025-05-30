
let age1 = 17;
let age2 = 22;

let result1 = age1 >= 18 ? "პირველი პირი სრულწლოვანია" : "პირველი პირი არასრულწლოვანია";
let result2 = age2 >= 18 ? "მეორე პირი სრულწლოვანია" : "მეორე პირი არასრულწლოვანია";

document.getElementById("ageCheck").innerText = result1 + " | " + result2;
console.log(result1);
console.log(result2);


let list = document.getElementById("evenNumbers");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }
}


function showAlert() {
  alert("თქვენ დააჭირეთ ღილაკს!");
}


function logInput(value) {
  console.log("Input მნიშვნელობა:", value);
}
