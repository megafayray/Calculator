let operator = null;
let firstNumber = "";
let secondNumber = "";
let result = null;
const display = document.getElementById("screen");

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
    display.textContent = value;
    result = value;
};

const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id;
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
    display.textContent = "0";
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
    } else {
        console.log("Dud");
    }
});

const backSpace= document.getElementById("Delete");
backSpace.addEventListener("click", () => {
    if (operator === null){
        firstNumber = firstNumber.slice(0, -1);
        display.textContent = firstNumber || "0";
    } else {
        secondNumber = secondNumber.slice(0, -1);
        display.textContent = secondNumber || "0";
    }
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
        })
    }else if (darkmode.textContent === "Light"){
        darkmode.textContent = "Dark";
        darkmode.style.backgroundColor = "#3B3F41"; 
        const container = document.getElementById("container");
        container.setAttribute("style", "background: #D6D58E;");
        const keypad = document.getElementById("keypad");
        keypad.setAttribute("style", "background: #D6D58E;");
    }
});