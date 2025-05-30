function getSum() {
  let number1 = 5;
  let number2 = 7;
  let sum = number1 + number2;
  console.log("ჯამი: ", sum);
  const resultElement = document.createElement("p");
  resultElement.textContent = "ჯამი: " + sum;
  document.body.appendChild(resultElement);
}

getSum();
