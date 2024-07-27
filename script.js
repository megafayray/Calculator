let operator = null;
let firstNumber = null;
let secondNumber = null;

const operate = function(firstNumber, operator, secondNumber){
    let value = "";
    if (operator === "*"){
        value = firstNumber * secondNumber;
    } else if(operator === "+"){
        value = firstNumber + secondNumber;
    } else if(operator === "-"){
        value = firstNumber - secondNumber;
    } else if(operator === "/"){
        value = (firstNumber / secondNumber).toFixed(2);
    } else{
        console.log("Woops!");
    };
    console.log(value);
    const display = document.getElementById("screen");
    display.textContent = value;
};

const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id;
        console.log(buttonId); //TESTING
        const display = document.getElementById("screen");
        if (firstNumber === null){
            firstNumber = parseFloat(buttonId); //converts string to a number
            display.textContent = buttonId;
            console.log(firstNumber); //TESTING
        } else if (operator !== null && secondNumber === null){
            secondNumber = parseFloat(buttonId); //converts string to a number
            console.log(secondNumber); //TESTING
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
        } else if (button.id = "Multiply"){
            operator = "*";
        }
        console.log(operator); //TESTING
    })
});

const equals = document.getElementById("Equals");
equals.addEventListener("click", () =>{
    console.log("=");
    if(firstNumber !== null && operator !== null && secondNumber !== null){
        operate(firstNumber, operator, secondNumber);
        firstNumber && secondNumber && operator === null; //reset
    } else {
        console.log("Dud");
    }
})
