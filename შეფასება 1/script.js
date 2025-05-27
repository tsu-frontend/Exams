// 1 დავალება

function getSum() {
  //2 მიანიჭეთ ამ ცვლადებს რიცხვითი მნიშვნელობები;
   
    let num1 = 15;
    let num2 = 20;

    //3 არითმეტიკული ოპერატორების გამოყენებით შეკრიბეთ ცვლადების მნიშვნელობები;
    let sum = num1 + num2;

    console.log("sum is:" + sum)
    //4 გამოტანის ოპერატორების მეშვეობით მიღებული შედეგი (ჯამი) დაბეჭდეთ კონსოლსა და HTML დოკუმენტში
    document.getElementById("result").innerText;
    document.write("sum is:" + sum);
}

getSum();