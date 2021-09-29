/**
 *  Running Calculator Program that asks the user for an operator and a value to add, subtract or divide to the running total.
 * 
 * @author Quinton Kulak
 * @version Fall 2021
 **/
const readline = require('readline');
const internal = require('stream');
const { setFlagsFromString } = require('v8');

/**Creates the readline**/
 
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

/** Holds the operator that the user enters */
var userInputOp = "";

/** Holds the running total of the calculator */
var total = 0.0;

/**
 * Prompts the user for the operator, and verifies that it is valid and quits if it is 'q'.
 * Also calls the getValue function.
 * 
 * @return none
 **/
function askForOperation (){

    rl.question("Enter operation (+-*/, q to quit) : ", (answer) => {
        
        if (answer == "q") {
            console.log("Final value : " + total);

            rl.close;

            process.exit();
        }
        else if (answer != "+" && answer != "-" && answer != "*" && answer != "/") {
            console.log("Please enter valid operator.");
            askForOperation();
        }

        getValue(answer);
    });

}

/**
 * Prompts the user to enter a value. It checks to make sure that the value is a number, 
 * then will call the doMath function.
 * 
 * @param operator, a string that holds the user's operator. 
 * @returns only when the value entered is not a number.
 */

function getValue(operator) {

    rl.question("Enter value : ", (answer) => {
        
        if (isNaN(answer) == true){
            console.log("Please enter a number.")
            askForOperation();
            return;
        }

        doMath(operator, answer);
    });

}

/**
 * Takes the operator and value and does math with the current total. Checks the for
 * the type of operator and does math accordingly. If the user tries to divide by zero,
 * then it gives an error and returns to askForOperation function. If the values are
 * valid then it comletes the calculation and loops back to the operator funciton.
 * 
 * @param operator a string that the user enters
 * @param value a number that the user enters
 * @returns only if the user tries to divide by zero.
 */
function doMath (operator, value){
        
    if (operator == "+") {
        total += value;
    }
    else if (operator == "-") {
        total -= value;
    }
    else if (operator == "*"){
        total = total * value;
    }
    else if (operator == "/" && value == 0) {
        console.log("Cannot divide by 0, please choose another number.")
        askForOperation();
        return;
    }
    else if (operator == "/") {
        total = total / value;
    }
   


    console.log("");
    console.log("Current Total : " + total);
    console.log("");

    askForOperation();
}

// starts the program
console.log("Welcome to Running-Calc.js");
askForOperation();





