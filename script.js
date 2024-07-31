let operator = null;
let firstNumber = "";
let secondNumber = "";
let result = "";
const display = document.getElementById("screen");
const decimalButton = document.getElementById(".");

const operate = function(firstNumber, operator, secondNumber){
    if (operator === "*"){
        result = firstNumber * secondNumber;
    } else if(operator === "+"){
        result = firstNumber + secondNumber;
    } else if(operator === "-"){
        result = firstNumber - secondNumber;
    } else if(operator === "/"){
        result = +(firstNumber / secondNumber).toFixed(2);
    } else {
        console.log("Woops!");
    };
    console.log(result);
    display.textContent = result;
};

const updateDecimalButtonState = () => {
    if ((operator === null && !firstNumber.toString().includes(".")) ||
        (operator !== null && !secondNumber.toString().includes("."))) {
        decimalButton.disabled = false;
    } else {
        decimalButton.disabled = true;
    }
};

const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id;
        if (operator === null) {
            firstNumber += buttonId;
            display.textContent = firstNumber;
        } else {
            secondNumber += buttonId;
            display.textContent = secondNumber;
        }
        updateDecimalButtonState();
    });
});

const buttonOperator = document.querySelectorAll(".operator");
buttonOperator.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (button.id === "Plus"){
            operator = "+";
        } else if (button.id === "Minus"){
            operator = "-";   
        } else if (button.id === "Divide"){
            operator = "/";
        } else if (button.id === "Multiply"){
            operator = "*";
        }
        console.log(operator); //TESTING
        updateDecimalButtonState();
    })
});

decimalButton.addEventListener("click", () => {
    if (operator === null) {
        // Prevent multiple decimals in the firstNumber
        if (!firstNumber.includes(".")) {
            firstNumber += ".";
            display.textContent = firstNumber;
        }
    } else {
        // Prevent multiple decimals in the secondNumber
        if (!secondNumber.includes(".")) {
            secondNumber += ".";
            display.textContent = secondNumber;
        }
    }
    updateDecimalButtonState();
});

const erase = document.getElementById("clear");
erase.addEventListener("click", () => {
    console.log("Erase");
    firstNumber = "";
    secondNumber = "";
    operator = null;
    result = "";
    display.textContent = "0";
    updateDecimalButtonState();
});

const equals = document.getElementById("Equals");
equals.addEventListener("click", () =>{
    console.log("=");
    if(operator === "/" && secondNumber === "0"){
        display.textContent = "Nice try!";
        firstNumber = "";
        secondNumber = "";
        operator = null;
    } else if (firstNumber !== "" && operator !== null && secondNumber !== ""){
        operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
        firstNumber = result;
        secondNumber = "";
        operator = null;
        console.log(firstNumber);
        console.log(secondNumber);
        console.log(operator);
    } else {
        console.log("Dud");
    }
    updateDecimalButtonState();
});

const backSpace = document.getElementById("Delete");
backSpace.addEventListener("click", () => {
    if (operator === null) {
        firstNumber = firstNumber.toString().slice(0, -1);
        display.textContent = firstNumber || "0";
    } else {
        secondNumber = secondNumber.toString().slice(0, -1);
        display.textContent = secondNumber || "0";
    }
    updateDecimalButtonState();
});

const google = document.getElementById("google");
google.addEventListener("click", () => {
    window.open("http://www.google.com");
});

const darkmode = document.getElementById("darkmode");
const elementsToStyle = ["container", "keypad"];

darkmode.addEventListener("click", () => {
    if (darkmode.textContent === "Dark"){
        darkmode.textContent = "Light";
        darkmode.style.backgroundColor = "#D0D1D5"; 
        elementsToStyle.forEach(id => {
            const element = document.getElementById(id);
            if (element){
                element.setAttribute("style", "background: #1E1F22;");
            }
        });
    } else if (darkmode.textContent === "Light"){
        darkmode.textContent = "Dark";
        darkmode.style.backgroundColor = "#3B3F41"; 
        const container = document.getElementById("container");
        container.setAttribute("style", "background: #D6D58E;");
        const keypad = document.getElementById("keypad");
        keypad.setAttribute("style", "background: #D6D58E;");
    }
});
