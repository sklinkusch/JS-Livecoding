/*****************************************************************
 * DON'T BE A NINJA
 ****************************************************************/

/*
 * Many developers try  to be as fancy as they can, by having
 * the shortest and least readable code.
 * 
 * But: Do NOT be a Ninja, if you're not asked for it.
 *
 * Reason:
 * Readability of code is an important factor for maintanability
 * and extandability of the things you've done in the past.
 */

/* 
 * Combining ternary operators
 *
 * This should be done in very rare cases only. Remember that modern
 * JavaScript tools (like WebPack) will compress your code anyway.
 */

i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

/* 
 * One-letter variables
 *
 * This should be avoided, except of small FOR loops, where "i" is used
 * as a common way to define the incremented value.
 */

// BAD CODE

const h = 'This is about something';
const s = 'More than you want to know';
const t = 'Some nice text\nSome nice text\ņ';

// GOOD CODE

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const headline = 'This is about something';
const subheadline = 'More than you want to know';
const text = 'Some nice text\nSome nice text\ņ';


/* 
 * Abbreviations
 *
 * They should be avoided at all!
 */

// BAD CODE

const totd = new Date().getTime();
const iua = true;

// GOOD CODE

const timeOfTheDay = new Date().getTime();
const isUserActive = true;


/* 
 * Telling stories (Code smell)
 *
 * Don't write comments that have no additional value!
 * If the code is explaining itself, we don't need to tell
 * a long story about the things it does by using comments.
 */

// BAD CODE

function addNumbers(numberOne, numberTwo) {
  // Adding the numbers
  const result = numberOne + numberTwo;
  
  // Returning the result
  return result;
}

// GOOD CODE

function addNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}


/* 
 * Parameter Madness
 *
 * Don't use too many parameters for a function. The rule of thumb should
 * be to have 1 or two parameters. Maximum should be 3, if you really
 * need to use more.
 */

// BAD CODE

function sayHelloToAll(personOne, personTwo, personThree, personFour, personFive) {
  console.log(`Hello ${personOne}!`);
  console.log(`Hello ${personTwo}!`);
  console.log(`Hello ${personThree}!`);
  console.log(`Hello ${personFour}!`);
  console.log(`Hello ${personFive}!`);
}

// GOOD CODE

// Use a Rest Parameter instead of a list of variables
function sayHelloToAllImproved(...persons) {
  persons.forEach(person => {
    console.log(`Hello ${person}`);
  })
}
