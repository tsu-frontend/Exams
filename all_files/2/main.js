const button = document.querySelector('.btn')
const input = document.querySelector('.text_input')

// part 1
const age1 = 22
const age2 = 12

function isAdult(age){
 if(age <= 0){
   console.log('invalid age')
 }else if(age < 18){
   console.log('not an adult')
 }else{
    console.log('adult')
 }
}

isAdult(age1)
isAdult(age2)


// part 2
for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}


// part 3
button.addEventListener('click', () =>{
    alert('submitted')
})


// part 4
input.addEventListener('input', () =>{
    console.log(input.value)
})