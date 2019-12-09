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

/********************************
 * Data Types in JavaScript
 */

 // Primitive types

 // String
 const name = 'John Doe';
 console.log(typeof name);
// number
const age = 45;
console.log(typeof age);
// Boolean
const hasKids = true;
console.log(typeof hasKids);
// Null
const car = null;
console.log(typeof car);
// Undefined
let test;
console.log(typeof test)
// Symbol
const sym = Symbol()
console.log(sym)


// Reference types

// Array
const hobbies = ['movies', 'music'];
console.log(hobbies);
// Object literals
const address = {
  city: 'Boston',
  state: 'ma'
}
console.log(address);
console.log(typeof address);

const today = new Date();

console.log(today)
console.log(typeof today)

