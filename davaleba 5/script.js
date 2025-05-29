const title = document.getElementById('main-title');
console.log('getElementById:', title);

const paragraphs = document.querySelectorAll('.text');
console.log('querySelectorAll – all paragraphs:');
paragraphs.forEach(p => console.log(p));

const boxes = document.querySelectorAll('.box');
console.log('querySelectorAll – all boxes:');
boxes.forEach(box => console.log(box));

title.style.color = 'green';
title.style.backgroundColor = 'yellowgreen';
title.style.fontSize = '40px';

paragraphs.forEach(p => {
  p.style.color = 'darkyellow';
  p.style.fontSize = '20px';
  p.classList.add('highlight');
});

boxes.forEach(box => {
  box.style.backgroundColor = '#008000';
  box.style.padding = '15px';
  
});
//3
document.addEventListener('DOMContentLoaded', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "გვირილა";

    const box = document.querySelector('.box');

    if (box) {
        box.appendChild(newParagraph);
    } else {
        console.error("Element with class 'box' not found!");
    }

    newParagraph.style.color = 'grey';
    newParagraph.style.fontSize = '20px';
    newParagraph.style.marginBottom = '15px';
});


//4

const input = document.getElementById('nameInput');
const button = document.getElementById('clickBtn');
const select = document.getElementById('selectBox');

input.addEventListener('focus', () => {
  console.log('Input field is focused');
});

input.addEventListener('blur', () => {
  console.log('Input field lost focus');
});

select.addEventListener('change', () => {
  console.log('Select value changed to:', select.value);
});

button.addEventListener('click', () => {
  console.log('Button was clicked!');
});

console.log('Event listeners registered successfully!');
