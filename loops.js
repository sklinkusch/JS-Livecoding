/*****************************************************************
 * FOR LOOP
 ****************************************************************/

/*
 * Parameters
 * 
 * 1. Initial setup (define one or more variables)
 * 2. Condition that has to be true, to run
 * 3. Code to run everytime the loop is executed
 */
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

logSpacer();

/*
 * Continue
 *
 * In this demo we skip every second entry.
 * The keyword "continue" skips the current execution and starts the next "round" (= incremented value).
 */
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0){
    continue;
  }
  
  console.log(i);
}

logSpacer();

/*
 * Break
 *
 * In this demo we stop when the number is dividable by 2.
 * The keyword "break" stops the execution of the loop (completely).
 */
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0){
    break;
  }
  
  console.log(i);
}

logSpacer();


/*****************************************************************
 * WHILE LOOP
 ****************************************************************/

/*
 * Parameters
 * 
 * 1. Condition that has to be true, to run
 */

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

logSpacer();


/*****************************************************************
 * DO WHILE LOOP
 ****************************************************************/

/*
 * Parameters
 * 
 * 1. Condition that has to be true, to run
 *
 * The condition is only checked AFTER the first run (execution of the code
 * inside the loop).
 */
i = 3;

do {
  console.log(i);
  i++;
} while (i < 3)


// HELPER only => Ignore for now :)

function logSpacer()  {
 console.log('\n--------------------------------\n');  
}

