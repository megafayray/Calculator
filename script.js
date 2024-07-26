const add = function (a, b) {
    return a + b;
  };
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
    return a * b;
};
const divide = function (a, b) {
    return a / b;
};

// - Create a variable for the first number, the operator, and the second number:

let firstNumber;
let secondNumber;
let operator;
let displayValue;

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers:

const operate = function(firstNumber, operator, secondNumber){
    if (operator === "multiply"){
        return multiply(firstNumber,secondNumber);
    } else if(operator === "add"){
        return add(firstNumber,secondNumber);
    } else if(operator === "subtract"){
        return subtract(firstNumber,secondNumber);
    } else if(operator === "divide"){
        return divide(firstNumber,secondNumber);
    } else{
        console.log("Woops!");
    };

};

// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.

const one = document.getElementById("one");
one.addEventListener("click", () => {
    console.log("1");

    const display = document.getElementById("screen");
    display.textContent = "1";
});

const two= document.getElementById("two");
two.addEventListener("click", () => {console.log("2")})

const three = document.getElementById("three");
three.addEventListener("click", () => {console.log("3")})

const four = document.getElementById("four");
four.addEventListener("click", () => {console.log("4")})

const five = document.getElementById("five");
five.addEventListener("click", () => {console.log("5")})

const six = document.getElementById("six");
six.addEventListener("click", () => {console.log("6")})

const seven = document.getElementById("seven");
seven.addEventListener("click", () => {console.log("7")})

const eight = document.getElementById("eight");
eight.addEventListener("click", () => {console.log("8")})

const nine = document.getElementById("nine");
nine.addEventListener("click", () => {console.log("9")})

const zero = document.getElementById("zero");
zero.addEventListener("click", () => {console.log("0")})