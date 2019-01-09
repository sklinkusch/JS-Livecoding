'use strict';

/*****************************************************************
 * FUNCTIONS
 ****************************************************************/

// Define a function
function helloWorld() {
  console.log('Hello world!');
}

// Call a function
helloWorld();

// Define a function expression
// Limits the scope of the function, to the block scope

{
  const sayHelloTo = function(name) {
    console.log(`Hello ${name}`);
  }
  
  sayHelloTo('John');
}

// This would not work, because the function sayHelloTo() only exists inside
// of the code block above.

// sayHelloTo('James');

// Define a function with a RETURN value
function getYear() {
  const year = new Date().getFullYear();
  
  return year;
}

console.log(getYear());

// Define a function with arguments / parameters and a return value
// 
// Every name of a parameter creates a variable (that is by default of type "undefined"),
// that can NOT be overwritten by anything outside of the function.
//
function addNumbers(numberOne, numberTwo) {
  if (typeof numberOne === 'undefined') {
    throw Error('Missing argument numberOne');
  }
  
  if (typeof numberTwo === 'undefined') {
    throw Error('Missing argument numberOne');
  }
  
  return numberOne + numberTwo;
}

console.log(addNumbers(7, 10));

// The constants defined outside of the function do not affect the inside,
// if we don't pass them as arguments. The name of a variable outside is
// independent from the variables that are created from arguments of
// a function.
const numberOne = 10;
const numberTwo = 20;

console.log(addNumbers(numberOne, numberTwo));

// Define a function with default arguments
function addColorSpan(text, color = 'red') {
  return `<span style="color: ${color}">${text}</span>`;
}

console.log(
  addColorSpan('Foo'),
  addColorSpan('Bar', 'green')
);

// Define a function with a rest parameter
function log(...params) {
  console.log(params);
  
  for (let i = 0; i < params.length; i++) {
    console.log(params[i]);
  }
}

log('foo', 'bar', 100);

/*****************************************************************
 * ARROW FUNCTIONS
 ****************************************************************/

// ADDING SCOPE LATER (array / objects)

// assigning function without name => anonymous function
const add = function(first, second) {
  return first + second;
};

const addArrow = (first, second) => {
  return first + second;
};

// Implicit return
// => no curly braces = implicit return instead of a code block
const addArrowReturn = (first, second) => first + second;

/*
 Short version for:
 
  const addArrowReturn = function(first, second) {
    return first + second;
 }
*/

// One parameter without paranthesis
const hello = name => console.log(name);

/*****************************************************************
 * CALLBACK FUNCTIONS
 ****************************************************************/

function getData(url, callback) {
  console.log(`Get data from url: ${url} ...`);
  console.log('... done! Now calling the callback.');
  
  // Nice AJAX queries and some fun stuff ... coming later
  
  const data = [
    'Repo 1',
    'Repo 2'
  ];
  
  // Simulating waiting for the API (timeout of 1 second)
  window.setTimeout(() => {
    callback(data);
  }, 1000);
}

function printResult(data) {
  console.log('Repositories:');

  data.forEach(item => {
    console.log(item);
  })
}

getData('https://api.github.com/users/noreading/repos', printResult);

console.log('There is something asynchronous right?');

/*****************************************************************
 * COMMON TIMING FUNCTIONS
 ****************************************************************/

//+ Timeout +//

// setTimeout(callback, delay in miliseconds)
window.setTimeout(() => {
  console.log('This was done 1 second (= 1000 ms) later!');
}, 1000);

//+ Interval +//

// 1. Store new Interval in a variable, so that we can access it later
// setInterval(callback, delay in miliseconds)
const doItForTenSeconds = window.setInterval(() => {
  console.log('This was done 1 second later in an interval!');
  console.log(new Date().toString());
}, 1000);

// 2. Stop the interval we created before
// clearInterval(interval)
setTimeout(() => {
  window.clearInterval(doItForTenSeconds);
  console.log('Stopped the interval!');
}, 10000);

