const readline = require('readline');
const internal = require('stream');
const { setFlagsFromString } = require('v8');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

var userInputOp = "";
var total = 0.0;

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

console.log("Welcome to Running-Calc.js");
askForOperation();





