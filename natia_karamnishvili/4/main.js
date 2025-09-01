// part 1
const date = new Date
console.log(date)


// part 2
let name1 = 'nika'
console.log(name1.toUpperCase())


// part 3
localStorage.setItem('city', 'Tbilisi')

const city = localStorage.getItem('city')

window.onload = () => {
    console.log(city)
}


// part 4
window.addEventListener('load', () =>{
    console.log('html is loaded')
})


// part 5
setInterval(() => {
    for(let i = 1; i < 10; i++){
        console.log(i)
    }
}, 1000);