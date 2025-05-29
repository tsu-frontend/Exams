// part1
const array = ['ana', 'nika', 'elene', 'diana', 'avtandili', 'nini', 'levani', 'nugzari', 'qetevani', 'zura', 'teona']

let arr = []

for(let i = 0; i < array.length; i++){
  if(array[i].length > 5){
    arr.push(array[i])
  }
}
console.log(arr)


// part 2
const firstElement = 'natia'
const lastElement = 'mariami'

arr.push(lastElement)
arr.unshift(firstElement)
console.log(arr)


// part3
let arrOfAges = [15, 12, 25, 18, 20, 19 , 34, 45, 17];

const newArr = arrOfAges.filter((e) => e > 18)
console.log(newArr)


// part4
let arr1 = [-2, 0, 5, 9, 1];
let arr2 = [6, 3, -4, 10, 7];

let newArray = arr1.concat(arr2)

newArray.sort((a, b) =>{
    return a - b
})

console.log(newArray)

