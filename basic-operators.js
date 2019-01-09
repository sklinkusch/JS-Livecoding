/*****************************************************************
 * Math Operators
 ****************************************************************/

const numberOfEntries = 100;
const entriesPerPage = 5;
const numberOfPages = 100 / 5;

console.log(`we need ${numberOfPages} pages for ${numberOfEntries} entries, splitted by ${entriesPerPage} entries per page.`);

console.log(10 + 20);   // Addition
console.log(20 - 10);   // Subtraction
console.log(5 * 10);    // Multiplication
console.log(100 / 5);   // Division
console.log(5 % 2);     // Modulo

// Short versions: upadting a variable with the result of a calculation
let pagesTotal = 0;

// pagesTotal = pagesTotal + numberOfPages
pagesTotal += numberOfPages;


/*****************************************************************
 * Increment and Decrement Operators
 ****************************************************************/

// incrementing a variable by 1, using ++
let rowCount = 1;
rowCount++;
rowCount++;

console.log('rowCount', rowCount);

let tableRowCount = 1;
// let rowsTotal = tableRowCount++;     first assign the value, then increment the original
let rowsTotal = ++tableRowCount;     // first increment the original, than assign the result as a value

console.log('rowsTotal', rowsTotal);
console.log('tableRowCount', tableRowCount);


/*****************************************************************
 * String Concatenation
 ****************************************************************/

const firstName = 'Maria';
const lastName = 'Fernandez';

const hello = 'Hello ' + firstName + ' ' + lastName;

const helloAgain = 'Hello ' + firstName + ' ' + lastName + '!' + '\n' +
      'How are you doing?';

const helloBrokenLines = 'Hello ' + firstName + ' ' + lastName + ' \
                         How are you doing?';

console.log(hello, '\n\n');
console.log(helloAgain, '\n\n');
console.log(helloBrokenLines, '\n\n');

// => PLEASE use template literals instead !!!

const helloLiteral = `Hello  ${firstName} ${lastName}
                      How are you doing?`;

console.log(helloLiteral);

/*****************************************************************
 * Comparison Operators
 ****************************************************************/

// The result is always boolean
console.log(1 === 2);

// Compare without type safety
const numberAsInteger = 10;
const numberAsString = '10';

console.log('compare equality without type safety:')
console.log(numberAsInteger == numberAsString);

// Compare with type safety (ALWAYS USE THIS)
console.log('compare equality with type safety:');
console.log(numberAsInteger === numberAsString);

// Inequality operator
console.log('compare inequality with type safety:');
console.log(numberAsInteger !== numberAsString);

// Negate comparisons
console.log(!(numberAsInteger === numberAsString));

// Logical operators

// AND (both conditions have to be true)
console.log('Logical AND');
console.log((1 === 1) && (1 === 2));

// OR (one of the conditions has to be true)
console.log('Logical OR');
console.log((1 === 1) || (1 === 2));

// Combining AND OR
console.log('Logical AND OR');
console.log(
  (1 === 1) &&
  ((1 === 2) || (1 === 1)
));
