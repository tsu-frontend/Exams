const outputHtml = document.querySelector("#output");

function getSum() {
  const number1 = 20;
  const number2 = 60;

  const sum = number1 + number2;
  console.log(sum);
  outputHtml.innerHTML = sum;
}

getSum();
