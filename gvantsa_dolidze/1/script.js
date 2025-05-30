// 1. გამოაცხადეთ ფუნქცია getSum და ასევე ორი ცვლადი: number1, number2
// 2. მიანიჭეთ ამ ცვლადებს რიცხვითი მნიშვნელობები;
// 3. არითმეტიკული ოპერატორების გამოყენებით შეკრიბეთ ცვლადების
// მნიშვნელობები;
// 4. გამოტანის ოპერატორების მეშვეობით მიღებული შედეგი (ჯამი) დაბეჭდეთ
// კონსოლსა და HTML დოკუმენტში.

const result = document.getElementById("result");

const number1 = 10;
const number2 = 5;
const getSum = () => {
  return number1 + number2;
};
console.log(getSum());

result.textContent = getSum();
