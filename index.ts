#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
{message: "Enter first number", type: "number", name: "FirstNumber"},
{message: "Enter second number", type: "number", name: "secondNumber"},
{
message: "select one of the operators to perfome operation",
type: "list",
name: "operator",
choices: ["Addition", "subtraction", "multiplication", "Division"],
},
]);
console.log(answer)

// coditional statement
if(answer.operator === "Addition"){
    console.log(answer.FirstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction"){
    console.log(answer.FirstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication"){
    console.log(answer.FirstNumber * answer.secondNumber);
}
else if (answer.operator === "Division"){
 console.log(answer.FirstNumber / answer.secondNumber);
}
else{
    console.log("pleas select a valid number")
}