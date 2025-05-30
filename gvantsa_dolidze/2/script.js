// 1. აღწერეთ ცვლადები: age1, age2. მიანიჭეთ რიცხვითი მნიშვნელობები და
// პირობითი ოპერატორის გამოყენებით დაადგინეთ არის თუ არა სწრულწლოვანი.
// დაბეჭდეთ შესაბამისი ტექსტი.

const age1 = 21;
const age2 = 17;

if (age1 >= 18) {
  console.log("Adult");
} else {
  console.log("Under-age");
}

if (age2 >= 18) {
  console.log("Adult");
} else {
  console.log("Under-age");
}

// 2. სასურველი ციკლის ოპერატორის დახმარებით დაბეჭდეთ 1-დან 10-ის ჩათვლით
// არსებული ლუწი რიცხვები.

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 3. HTML დოკუმენტში შექმენით ღილაკი და მასზე დაჭერისას გამოვიდეს
// შეტყობინება.
const btn = document.getElementById("btn");
const result = document.getElementById("result");
showResult = () => {
  return (result.innerText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
     It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
     essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
     versions of Lorem Ipsum.`);
};

// 4. input ტეგში ტექსტის ჩაწერის პარალელურად კონსოლში დაბეჭდეთ input-ის
// მნიშვნელობა.

const inputElement = document.getElementById("input_name");
inputElement.addEventListener("input", () => {
  console.log(inputElement.value);
});
