/*****************************************************************
 * To String
 ****************************************************************/

let isBoolean = true;
let isBooleanAsString = String(isBoolean);
let number = 10;
let numberAsString = String(number);

console.log(isBoolean, isBooleanAsString);
console.log(number, numberAsString);

// Automatic type conversion
let combinedString = isBooleanAsString + ' ' + number;

console.log('combined string:');
console.log(combinedString);

/*****************************************************************
 * To Number
 ****************************************************************/

let year = '2009';
let yearAsNumber = Number(year);

console.log('year', yearAsNumber);

let isFeatureEnabled = false;
let isFeatureEnabledAsNumber = Number(isFeatureEnabled);

console.log('feature enabled', isFeatureEnabledAsNumber);

/*****************************************************************
 * To Boolean
 ****************************************************************/

let userIsActive = 1;
let userIsActiveAsBoolean = Boolean(userIsActive);

console.log('user is active', userIsActiveAsBoolean);
