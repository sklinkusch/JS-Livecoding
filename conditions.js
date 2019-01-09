/*****************************************************************
 * IF
 ****************************************************************/

let age = 16;

if (age < 18) {
  console.log('You are too young!');
}

/*****************************************************************
 * IF => ELSE IF
 ****************************************************************/

// When one of the conditions is true, the other conditions are NOT
// checked anymore.

age = 60;

if (age < 18) {
  console.log('You are still too young!');
} else if (age > 50) {
  console.log('You are quite old!');
} else if (age > 100) {
  console.log('You are too old!');
} else {
  console.log('You are out of range!');
}

/*****************************************************************
 * IF => ELSE
 ****************************************************************/

age = 10;

if (age < 5) {
  console.log('Hey there, young boy / girl / whatever!');
} else {
  console.log('Hey there, happy young boy / girl / whatever!');
}

/*****************************************************************
 * TERNARY OPERATOR
 ****************************************************************/

const age = 16;
const isAllowedToDrinkBeerInGermany = age > 15 ? true : false;

/*****************************************************************
 * SWITCH
 ****************************************************************/

const errorCode = 404; // typical error code for "not found"

switch (errorCode) {
  case 500:
  case 501: // multiple cases for one code block = logical OR
  case 502:
    console.log('Server error!');
    break;
  case 404:
    console.log('Page not found!');
    break;
  case 422:
    console.log('Unprocessable entity!');
    break;
  case 200:
    console.log('OK');
    break;
  default:
    console.log('Unknown code!');
    break;
}

