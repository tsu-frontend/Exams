// 1
function printDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  console.log(`დღევანდელი თარიღი: ${day}/${month}/${year}`);
}
printDate();
//

// 2
const name = "nika";
function toUpperCase(str) {
  return str.toUpperCase();
}
console.log(toUpperCase(name));
//

// 3
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}
saveToLocalStorage("msg", "გამარჯობა!");
const savedText = getFromLocalStorage("msg");
console.log(savedText);
//

// 4
window.addEventListener("load", function () {
  console.log("HTML დოკუმენტი ჩატვირთულია!");
});
//

// 5
let count = 1;
function printNumbers() {
  if (count <= 10) {
    console.log(count);
    count++;
    setTimeout(printNumbers, 1000);
  }
}
printNumbers();
//
