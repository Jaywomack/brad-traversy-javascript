/*
 *
 **
 ***
 ****
 *****
 */

// console.log('hello world!')
// console.log(123)
// console.log(true)
// var greeting = 'hello'
// console.log(greeting)
// console.log([1,2,3,4])
// console.log({a:1, b:2})
// console.table({a:1, b:2})
// console.error('This is an error')
// console.clear()
// console.warn('this is a warning')
// // Will run a timer on how long it takes to execute the functions
// console.time('hello')
// console.log('hello world!')
// console.log('hello world!')
// console.log('hello world!')
// console.log('hello world!')
// console.log('hello world!')
// console.log('hello world!')

// console.timeEnd('hello')

//Declaring variables

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init car
// var greeting;
// console.log(greeting)
// greeting = 'Hello'
// console.log(greeting)

// // Letters numbers _ $
// Numbers cannot be the first symbol
// starting with an _ is for private variables, usually in frameworks
// $ is used in jquery and string literals

// // multi word vars
// var firstName = 'John' // camelCase
// var first_name = 'James' // Underscore
// var FirstName = 'Jack' // PascalCase

// // Let
// // Let can be reassigned and is able to be initalized without a value
// let name; // Intialized with no value
//  name = 'John Doe'
// console.log(name)
// name = 'Steve Smith'
// console.log(name)

// Const
// is immutable, meaning that its value cannot be changed
// Numbers can be added to an array, but it cannot be changed into a new array
// const cannot be initalized without a value either
// const name = 'john'
// console.log(name)

// const numbers = [1,2,3,4,5]

// numbers.push(6)

// console.log(numbers)

// /********************************
//  * Data Types in JavaScript
//  */

//  // Primitive types

//  // String
//  const name = 'John Doe';
//  console.log(typeof name);
// // number
// const age = 45;
// console.log(typeof age);
// // Boolean
// const hasKids = true;
// console.log(typeof hasKids);
// // Null
// const car = null;
// console.log(typeof car);
// // Undefined
// let test;
// console.log(typeof test)
// // Symbol
// const sym = Symbol()
// console.log(sym)

// // Reference types

// // Array
// const hobbies = ['movies', 'music'];
// console.log(hobbies);
// // Object literals
// const address = {
//   city: 'Boston',
//   state: 'ma'
// }
// console.log(address);
// console.log(typeof address);

// const today = new Date();

// console.log(today)
// console.log(typeof today)

/******
 * Type conversion
 */

// let val;

// // number to string
// //  val = String(5);
// //  val = String(4+4)

// // Boolean to a string
// val = String(true);

// // Date to a string
// val = String(new Date());
// // Array to string
// val = String([1, 2, 3, 4]);

// // toString

// val = (5).toString();
// val = true.toString();

// // String to number
// val = Number("5");

// // Boolean to number
// val = Number(true);
// val = Number(false);
// val = Number(null);
// // Will return NaN
// val = Number("hello");
// val = Number([1, 2, 3]);

// // parse int will convert a string to a number
// // parse float will convert a string into a number with decimals
// val = parseInt("100");
// val = parseFloat("100.30");

// // output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed);

// type coercion

// In this example JavaScript changes the 6 into a string and concatenates the two arrays together
// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;
// console.log(sum);
// console.log(typeof sum);

/**
 * Numbers and the Math Object
 */

const num1 = 100;
const num2 = 50;
let val;

// Simple Math with Numbers
val = num1 + num2;
val = num1 * num2;
val = num1 / num2;
val = num1 - num2;
val = num1 % num2;

// Math Object
val = Math.PI; //pie
val = Math.E; // Eulers number
val = Math.round(2.8);
val = Math.ceil(2.2); //rounds up
val = Math.floor(2.8); //round down
val = Math.sqrt(64); // Square root
val = Math.abs(-3); // Absolute number
val = Math.pow(8, 2); // 8 to the power of two
val = Math.min(2, 3, 4, 1, 55, 6, 3, -2); // Min will return the smallest number
val = Math.max(2, 3, 4, 1, 55, 6, 3, -2); // Max will return the largest number
val = Math.random(); // Will return a random decimal
val = Math.floor(Math.random() * 20 + 1); // Will return a number between 1-100

console.log(val);
