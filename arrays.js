/*****************************************************************
 * ARRAYS: NUMERIC INDEX
 ****************************************************************/

// Define an array in the old days
const people = new Array('Peter', 'Paul', 'Mary', 'Jane');

// Modern definition of an array
const persons = ['Peter', 'Paul', 'Mary', 'Jane'];

// Logging an array, to see what's in there
console.log(persons);

/*
 The output in the console will be something similar to this:
 
 Index: value
 
 [
   0: "Peter",
   1: "Paul",
   2: "Mary",
   3: "Jane"
 ]
 
 It is IMPORTANT that the automatic index starts at 0 !
*/

// Accessing one item of a numeric array
console.log(`Hello ${persons[0]}!`);

// Getting the length (= size) of an array
console.log(persons.length);

// Getting the last entry of an array
console.log(persons[ persons.length - 1 ]);

// Extracts and deletes the last element of an array, BUT => This changes the original array
console.log(persons.pop());
console.log(persons);

// Add an item at the end of an array
persons.push('Alexia');
console.log(persons);

// Add an item at the beginning of an array
persons.unshift('Marc');
console.log(persons);

// Check if an array includes an item
console.log(persons.includes('Alexia'));   // false
console.log(persons.includes('Mercedes')); // false

console.log(persons.indexOf('Alexia'));    // -1, if not found

const indexOfMary = persons.indexOf('Mary'); // 2
persons[indexOfMary] = 'Mary is awesome';
console.log(persons);

// Getting the first 2 items of an array
const slice = persons.slice(0, 2);
console.log('Slice:');
console.log(slice);

// forEach is a method of the global Array object
//
// Loop through all items of an array, using a callback function
// Callback = The forEach() calls that function for every element in the array
persons.forEach((value, index) => {
  console.log(index, value);
});

// Loop through an array the old (and sometimes still needed way)
for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
}

// Checking if a variable is of type Array
console.log(typeof persons);
console.log(Array.isArray(persons));

// Creating a string from an array
console.log(persons.join(', '));
console.log(persons);

// Create a new array, using a callback on each item
const partyCrowd = persons.map((item, index) => {
  return `${index}: ${item}`;
});

console.log(partyCrowd);

// Create a new array, using a filter condition
const innerCircle = persons.filter((person) => {
  return (person === 'Peter' || person === 'Alexia');
});

console.log('Inner circle:');
console.log(innerCircle);

// Reverse an array
persons.reverse();

console.log('Reversed:');
console.log(persons);
