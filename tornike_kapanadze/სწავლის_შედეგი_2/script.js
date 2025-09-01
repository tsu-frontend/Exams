// 1. აღწერეთ ცვლადები: age1, age2. მიანიჭეთ რიცხვითი მნიშვნელობები და
// პირობითი ოპერატორის გამოყენებით დაადგინეთ არის თუ არა სწრულწლოვანი.
// დაბეჭდეთ შესაბამისი ტექსტი.
let age1 = 45;
let age2 = 12;

if (age1 >= 18) {
  console.log("სრულწლოვანია");
} else {
  console.log("არასრულწლოვანია");
}

// 2. სასურველი ციკლის ოპერატორის დახმარებით დაბეჭდეთ 1-დან 10-ის ჩათვლით
// არსებული ლუწი რიცხვები.
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 3. HTML დოკუმენტში შექმენით ღილაკი და მასზე დაჭერისას გამოვიდეს
// შეტყობინება.
let container = document.createElement("div");
document.body.appendChild(container);

let button = document.createElement("button");
button.innerHTML = "Click Me";

button.addEventListener("click", () => {
  let heading = document.createElement("h2");
  heading.innerHTML = "Some Message";
  container.appendChild(heading);
});

container.appendChild(button);

// 4. input ტეგში ტექსტის ჩაწერის პარალელურად კონსოლში დაბეჭდეთ input-ის
// მნიშვნელობა.
let container2 = document.createElement("div");
container2.style.margin = "20px 0px";
document.body.appendChild(container2);

let input = document.createElement("input");
input.setAttribute("type", "text");
container2.appendChild(input);
console.log(input);

input.addEventListener("input", () => {
  console.log(input.value);
});
