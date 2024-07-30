let operator = null;
let firstNumber = "";
let secondNumber = "";
let result = null;

const operate = function(firstNumber, operator, secondNumber){
    let value = "";
    if (operator === "*"){
        value = firstNumber * secondNumber;
    } else if(operator === "+"){
        value = firstNumber + secondNumber;
    } else if(operator === "-"){
        value = firstNumber - secondNumber;
    } else if(operator === "/"){
        value = +(firstNumber / secondNumber).toFixed(2);
    } else{
        console.log("Woops!");
    };
    console.log(value);
    const display = document.getElementById("screen");
    display.textContent = value;
    result = value;
};

const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id;
        const display = document.getElementById("screen");

        if (operator === null){
            firstNumber += buttonId;
            display.textContent = firstNumber;
            console.log(firstNumber);
        } else if (operator !== null){
            secondNumber += buttonId;
            display.textContent = secondNumber;
            console.log(secondNumber);
        }
    });
});

const buttonOperator = document.querySelectorAll(".operator");
buttonOperator.forEach((button) => {
    button.addEventListener("click", (event) => {
        if(button.id === "Plus"){
            operator = "+";
        } else if (button.id === "Minus"){
            operator = "-";   
        } else if (button.id === "Divide"){
            operator = "/";
        } else if (button.id === "Multiply"){
            operator = "*";
        }
        console.log(operator); //TESTING
    })
});

const erase= document.getElementById("clear");
erase.addEventListener("click", () => {
    console.log("Erase");
    firstNumber = "";
    secondNumber = "";
    operator = null;
    result = null;
    const display = document.getElementById("screen");
    display.textContent = "0";
});

const equals = document.getElementById("Equals");
equals.addEventListener("click", () =>{
    console.log("=");
    if(operator === "/" && secondNumber === 0){
        firstNumber = "";
        secondNumber = "";
        operator = null;
        const display = document.getElementById("screen");
        display.textContent = "Nice try!";
    } else if (firstNumber !== "" && operator !== null && secondNumber !== ""){
        operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
        firstNumber = result;
        secondNumber = "";
        operator = null;
    } else {
        console.log("Dud");
    }
})
