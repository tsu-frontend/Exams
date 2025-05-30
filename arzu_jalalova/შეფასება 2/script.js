//1. აღწერეთ ცვლადები: age1, age2. მიანიჭეთ რიცხვითი მნიშვნელობები და პირობითი ოპერატორის გამოყენებით დაადგინეთ არის თუ არა სწრულწლოვანი. დაბეჭდეთ შესაბამისი ტექსტი.

let age1 = 17;
let age2 = 20; 

function checkAge (age, elementId) {
    let message = (age >= 18) ? "სრულწლოვანია" : "არ არის სრულწლოვანი";
    document.getElementById(elementId).innerHTML += `ასაკი: ${age} — ${message}<br>`;
  }
     checkAge(age1, "ageResult");
     checkAge(age2, "ageResult");

// 2. სასურველი ციკლის ოპერატორის დახმარებით დაბეჭდეთ 1-დან 10-ის ჩათვლით არსებული ლუწი რიცხვები.

  let evenText = "ლუწი რიცხვები 1-დან 10-მდე:<br>";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      evenText += i + "<br>";
    }
  }
  document.getElementById("evenNumbers").innerHTML = evenText;

//3. HTML დოკუმენტში შექმენით ღილაკი და მასზე დაჭერისას გამოვიდეს შეტყობინება.
function showAlert() {
    alert("ღილაკზე დააჭირეთ!");
  }


  // 4. input ტეგში ტექსტის ჩაწერის პარალელურად კონსოლში დაბეჭდეთ input-ის მნიშვნელობა.
  function logInput(value) {
    console.log("Input value:", value);
  }
