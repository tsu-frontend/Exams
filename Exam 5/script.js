// 1. გამოიყენეთ getElementBy და querySelector, querySelectorAll მეთოდები
// შესაბამისი HTML ელემენტების სელექციისთვის. თითოეული ელემენტი
// გამოიტანე კონსოლში რათა დარწმუნდე რომ მოხდა სწორი ელემენტის სელექცია.
const headingById = document.getElementById('main-heading');
console.log(headingById);

const firstInfoParagraph = document.querySelector('.info-paragraph');
console.log(firstInfoParagraph);

const allInfoParagraphs = document.querySelectorAll('.info-paragraph');
console.log(allInfoParagraphs);

// 2. Javascript გამოყენებით შეცვალეთ ნაპოვნი ელემენტების თვისებები (ტექსტის
// ან ფონის ფერი, ფონტის ზომა, დაამატე ან წაშალე კლასი და აშ.)
headingById.style.color = 'blue';
firstInfoParagraph.style.backgroundColor = 'lightgray';
allInfoParagraphs.forEach(p => {
    p.style.fontWeight = 'bold';
});

// 3. შექმენი ახალი პარაგრაფი, დაამატე მასში ტექსი და მოათავსე პარაგრაფი
// დოკუმენტში.
const newParagraph = document.createElement('p');
newParagraph.textContent = 'dynamically created paragraph';
const paragraphContainer = document.getElementById('container');
paragraphContainer.appendChild(newParagraph);

// 4. ნაპოვნ ელემენტებზე დაარეგისტრირე მოვლენების მსმენელი ფუნქციები
// (მაგალითად focus, blur, change, click და აშ.) ფუნქციის საშუალებით გამოიტანე
// შესაბამისი შეტყობინება რათა დარწმუნდე რომ მსმენელი წარმატებით
// დარეგისტრირდა.
const clickButton = document.getElementById('click-button');
const eventInput = document.getElementById('event-input');

clickButton.addEventListener('click', function() {
    alert('click');
});

eventInput.addEventListener('focus', function() {
    console.log('focus');
});

eventInput.addEventListener('blur', function() {
    console.log('blur');
});

eventInput.addEventListener('change', function() {
    console.log('change');
});