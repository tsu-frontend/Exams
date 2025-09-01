// part 1
const divWithText = document.getElementById('lorem')
const main = document.querySelector('.main_part')
const input = document.querySelector('input')
const text = document.querySelectorAll('.text')

// console.log(divWithText, main, text)



// part 2
divWithText.style.width = '400px'
main.style.width = '400px'
main.style.height = '400px'
main.style.display = 'flex'
main.style.justifyContent = 'center'
main.style.alignItems = 'center'
main.style.background = 'rgb(17, 71, 50)'

text.forEach((e) => {
    e.style.height = '100px'
    e.style.width = '500px'
    e.style.background = 'rgb(8, 120, 120)'
    e.style.margin = '10px'
})

main.addEventListener('click', () => {
    main.classList.toggle('bg_element')
    divWithText.classList.add('bg_transition')
})


// part 3
const newElement = document.createElement('p')

newElement.classList.add('white_center')
main.addEventListener('click', () => {
    main.append(newElement)
})


// part 4
divWithText.addEventListener('mouseover', () => {
    console.log('mouseover succeed')
})


input.addEventListener('focus', () => {
    console.log('focus')
})
input.addEventListener('blur', () => {
    console.log('lost focus')
})
