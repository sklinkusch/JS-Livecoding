/*****************************************************************
 *
 * String
 *
 * - Can be written within 'single' or "double" quotes
 * - Can store any character (a-b, 0-9, special chars, etc.)
 * - The type of quotes used for start and end have to be escaped
 *   in between, using the backslash \'  \"
 * - Newlines are created using '\n'
 *
 * More:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *
 ****************************************************************/

// Definition of strings

const stringA = 'single quotes with\n\'another\' line';
const stringB = "double quotes with\n\"another\" line";

console.log(stringA);
console.log(stringB);

// Concatenation

const name = 'Peter';
const hello = 'Hello';

const message = hello + ' ' + name;

console.log(message);

// Template literals
// - Are written in `backticks`
// - Can be multi-line
// - Can include any JS by using this syntax:
//   ${ any javascript code }

const newMessage = `${hello} ${name}

How are you doing?
`;

console.log(newMessage);


/*****************************************************************
 *
 * Numbers
 *
 * - Can be written as integer or floating point values
 * - Can store negative values, too
 * - Can be used for basic math operations
 *
 * More:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 *
 ****************************************************************/

const integerNumber = 10;
const floatNumber = 1.5;

// Basic math calculations
console.log(integerNumber + floatNumber);   // Addition
console.log(integerNumber - floatNumber);   // Subtraction
console.log(integerNumber * floatNumber);   // Multiplication
console.log(integerNumber / floatNumber);   // Division
console.log(5 % 2);                         // Modulo


/*****************************************************************
 *
 * Boolean
 *
 * - Can only have 2 values: true / false
 * - Are used for decisions like "is it a user?"
 *
 * More:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 *
 ****************************************************************/

const isJaneMarried = true;
const isPeterMarried = false;

// Do NOT use abbreviations just because you can !!!
// idwly = is date with leap year
const idwly = true;

// Better naming:
const isDateWithLeapYear = true;
const dateHasLeapYear = true;


/*****************************************************************
 *
 * null
 *
 * - is used to denote the absence of a value
 * - is used a lot within APIs that always return the same data
 *   structure and tell that properties are empty, by using null
 *
 * More:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
 *
 ****************************************************************/

// We define that Maria could have a car, but doesn't, because we
// want to have the same data structure for all people.
const maria = {
  name: 'Maria',
  car: null
}

const peter = {
  name: 'Peter',
  car: 'VW Golf'
}


/*****************************************************************
 *
 * NaN
 *
 * - is never used in a definition
 * - is used as a result of impossible calculations
 *
 * More:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
 *
 ****************************************************************/

const result = 10 * 'foobar';
console.log(result);


/*****************************************************************
 *
 * Undefined
 *
 * - is the default type, when you try to access a variable, that
 *   has not been defined (yet)
 *
 * More:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
 *
 ****************************************************************/

console.log(typeof neverDefinedThatName);
