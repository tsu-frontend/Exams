// 1. გამოაცხადეთ ფუნქცია getSum და ასევე ორი ცვლადი: number1, number2
// 2. მიანიჭეთ ამ ცვლადებს რიცხვითი მნიშვნელობები;
// 3. არითმეტიკული ოპერატორების გამოყენებით შეკრიბეთ ცვლადების
// მნიშვნელობები;
// 4. გამოტანის ოპერატორების მეშვეობით მიღებული შედეგი (ჯამი) დაბეჭდეთ
// კონსოლსა და HTML დოკუმენტში.

function getSum() {
    let number1 = 15;
    let number2 = 25;
    let sum = number1 + number2;
    
    console.log(sum);
    document.getElementById('result').textContent = sum;
}

getSum();