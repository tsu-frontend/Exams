// 1 davaleba
let age1 = 15;
let age2 = 21;

// es mewera da agar wavshale iyos mainc
// if (age1>=18 && age2>=18){
//     console.log('orive srulwlovania')
// } else if (age1 >= 18 && age2 < 18) {
//     console.log('pirveli srulwlovania meore ki ara')
// } else if (age1 < 18 && age2 >= 18) {
//     console.log('meore srulwlovania pirveli ki ara')
// } else {
//     console.log('arcerti ar aris srulwlovani')
// }

let person1 = age1 >= 18 ? 'pirveli srulwlovania' : 'pirveli ar aris srulwlovani'
let person2 = age2 >= 18 ? 'meore srulwlovania' : 'meore ar aris srulwlovani'

document.getElementById('age').textContent = person1 + ", " + person2

// 2 davaleba

let array = [1,2,3,4,5,6,7,8,9,10]


for (let i of array){
    if (i % 2 === 0){
        console.log(i)
    }
}

// 3 davaleba

function showMessage() {
    alert("you pressed me");
}

// 4 davaleba

const inputElement = document.getElementById('myInput');

    inputElement.addEventListener('input', function() {
    console.log(inputElement.value);
});