// 1. აღწერეთ ცვლადები: age1, age2. მიანიჭეთ რიცხვითი მნიშვნელობები და
// პირობითი ოპერატორის გამოყენებით დაადგინეთ არის თუ არა სწრულწლოვანი.
// დაბეჭდეთ შესაბამისი ტექსტი.
let age1 = 25;
let age2 = 16;

if (age1 >= 18) {
    console.log("is an adult");
} else {
    console.log("is not an adult");
}

if (age2 >= 18) {
    console.log("is an adult");
} else {
    console.log("is not an adult");
}

// 2. სასურველი ციკლის ოპერატორის დახმარებით დაბეჭდეთ 1-დან 10-ის ჩათვლით
// არსებული ლუწი რიცხვები.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. HTML დოკუმენტში შექმენით ღილაკი და მასზე დაჭერისას გამოვიდეს
// შეტყობინება.
const btn = document.getElementById('myButton');
btn.addEventListener('click', function() {
    alert("alert message");
});

// 4. input ტეგში ტექსტის ჩაწერის პარალელურად კონსოლში დაბეჭდეთ input-ის
// მნიშვნელობა.
const input = document.getElementById('myInput');
input.addEventListener('input', function() {
    console.log(input.value);
});