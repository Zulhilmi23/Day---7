console.log("hello,World!");

//JavaScript Intro 101

// 1.Variables
// assign a value to a variable
// var vs let vs const
// var more traditional, let is newer
// var x = 5;
let y = 10;
const pie = 3.14;

// Variable naming conventions
// camel case
// What is convention - is a rule which is followed by the majority developers
const firstName = "John";
const lastName = "Doe";

console.log(y);
console.log(pie);
// reassign a value to a variable
y = 40;
// pie = 3.14159;
console.log(y);
// console.log (pie)

// 2. Data Types
// Number
let num = 3.14;
//String
//double quotes, single quotes, backticks
let str = "Hello, World!";
let str2 = "Hello, world!";
let str3 = `Hello, World!`;

// Boolean
let isMale = true;
let isFemale = false;
//Undefined
let z;
console.log(z);
// Null
let a = null;
console.log(a);
// Object
// using curly braces
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
console.log(person);
// Array
// using sqyare brackets
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

// determine the data type of a variable
console.log(num, typeof num);
console.log(str, typeof str);
console.log(isMale, typeof isMale);
console.log(fruits, typeof fruits);
