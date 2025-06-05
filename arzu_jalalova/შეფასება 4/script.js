const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

document.getElementById("dateOutput").innerHTML = `დღევანდელი თარიღია: ${day}/${month}/${year}`;
  console.log("თარიღი:", day, month, year);


//2

let namei = 'nika';
let upperName = namei.toUpperCase();
console.log("მაღალ რეგისტრში:", upperName);

//3 
localStorage.setItem("myText", "ლოკალურ მეხსიერებაში");
const savedText = localStorage.getItem("myText");
document.getElementById("localStorageOutput").innerText = savedText;

//4 
window.onload = function() {
    alert("გვერდი ჩაიტვირთა წარმატებით!");
  }


  //5

  let count = 1;
  let interval = setInterval(function() {
    if (count <= 10) {
      document.getElementById("counterOutput").innerHTML += count + "<br>";
      console.log(count);
      count++;
    } else {
      clearInterval(interval);
    }
  }, 1000);