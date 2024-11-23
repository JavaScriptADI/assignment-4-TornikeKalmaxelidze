// Write your code here

// task 1
// 1.What method would you use to add an element to the end of an array?
// for example 
const pushArray = [1, 4, 5];
pushArray.push(10, 10, 10);
console.log(pushArray);

// task 2 
// How do you remove the first element from an array?
const removeArray = [10, 9, 8];
removeArray.shift();
console.log(removeArray);

// task 3 

// დამატების ან ამოღების შემთხევაში ვიყენებთ splice

// const arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2, 6, 7);  // arr ხდება [1, 2, 6, 7, 5]
// console.log(arr);

//    თუ უნდა ავირჩიოთ ან შევიანხოთ ახალ მასივში ვიყენებთ slice 
// const arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(1, 4);  // newArr იქნება [2, 3, 4]
// console.log(newArr);

// task 4 
const arr = [10, 20, 30, 40, 20, 60, 70, 80];
console.log(arr.length);
// იქნება 8 

// task 5
const includes = [10, 20, 30, 40];

console.log(arr.includes(20));
console.log(arr.includes(50));

// task 6 
const sortArray = [100, 1, 1000, 10, 20, 2000, 200, 2];

sortArray.sort();
console.log(sortArray);

// task 7 
let copyArrey = [1, 10, 100];
let copy = copyArrey.slice();
console.log(copy);

// task 8 
const reversArray = [1, 2, 3, 4, 5, 6];

reversArray.reverse();
console.log(reversArray);

// task 9 
let firstArray = [10, 20, 30];
let secendArray = [30, 20, 10];
let combinedArray = firstArray.concat(secendArray);

console.log(combinedArray);


// task 10

const matrix = [
    [10, 20, 30],  // first line is index: 0;  a0 a1 a2
    [40, 50, 60],  // secend line is index: 1; b0 b1 b2
    [70, 80, 90]   // third line is index; 2   c0 c1 c2
];
//sadghac xo mainc gamomadga matricebis codna 

let matrixElement = matrix[1][1];
console.log(matrixElement);



// Assignment 1: Basic Array Operations

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

let thirdElement = numberArray[2];
console.log(thirdElement);

numberArray[4] = 15;
console.log(numberArray);

numberArray.push(100);
console.log(numberArray);

numberArray.shift();
console.log(numberArray);

// Assignment 2: Array Methods - push, pop, shift, unshift

const Fruits = ["Apple", "Banana", "Kiwi"];

Fruits.push("Orange");
console.log(Fruits);

Fruits.pop();
console.log(Fruits);

Fruits.unshift("Strawberry");
console.log(Fruits);

Fruits.shift();
console.log(Fruits);

// Assignment 3: Iterating Over an Array

const color = ["Red", "Blue", "Green", "White", "Aqua"];

for (let i = 0; i < color.length; i++) {
    console.log(color[i]);
}

// Assignment 4: Array Methods - splice and slice 

const randomNumbers = [20, 21, 22, 23, 24, 25];
let randomNumbersDelete = randomNumbers.splice(1, 2);
console.log(randomNumbers);

let randomNumbersAdd = randomNumbers.splice(1, 0, 21, 22)
console.log(randomNumbers);

let ThreeElementChangelast = randomNumbers.slice(-3);
console.log(ThreeElementChangelast);

// Assignment 5: Array Sorting 

const names = ["Chola", "Juxo", "Maxo", "Giurza", "Anna", "Alica", "Zura"];

names.sort();
console.log(names);

names.reverse();
console.log(names);

// Assignment 6: Finding Elements in an Array


const numbers6 = [10, 20, 30, 40, 50];

const position = numbers6.indexOf(50);
console.log(position);

const isPresent = numbers6.includes(30);
console.log(isPresent);

const index = numbers6.findIndex(num => num > 40);
console.log(index);


const value = 25;

let valueIndex = -1;

for (let i = 0; i < numbers6.length; i++) {
    if (numbers6[i] > value) {
        valueIndex = i;
        break;
    }
}

console.log(valueIndex);

// Assignment 7: Multi-dimensional Arrays

const Grid = [
    [100, 200, 300,],
    [400, 500, 600,],
    [700, 800, 900,]
]

let GridElement = Grid[2][2];
console.log(GridElement)


Grid[1][2] = 50;
console.log(Grid);

// Assignment 8: Array Destructuring

const FourElements = [10, 20, 30, 40];

let [first, secend] = FourElements;

console.log('before swap')
console.log('before', first);
console.log('before', secend);

[first, secend] = [secend, first];
console.log('after swap')
console.log('after', first);
console.log('after', secend);

// Assignment 9: Combining Arrays

const combiningFirstNumbers = [10, 20, 30, 40];
const combiningSecendNumbers = [10, 20, 30, 40];
const combained = combiningFirstNumbers.concat(combiningSecendNumbers);


console.log(combained);

// Assignment 10: Reversing and Sorting Arrays
const sortNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

sortNumbers.reverse();
console.log(sortNumbers);

sortNumbers.sort((a, b) => b - a);
console.log(sortNumbers);

