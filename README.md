Learnings and reminders:
- Use "defer" after the link to the javascript external file to delay until window load
- Use "parseFloat" to convert a string into a number (used when converting an ID into a number)
- To set a variable to null, explicitly use "firstNumber = null", not "firstNumber === null"
- Use parseFloat(buttonId) to convert a string to a number
- My "if(operator === "/" && secondNumber === "0")" code wasn't working ("Infinity" was displayed). This is because I'm using numbers, not strings (using "" indicates a string)

Done:
- Create functions for the following items:
--add
--subtract
--multiply
--divide

- Create a variable for the first number, the operator, and the second number
- Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers
- Create the functions that populate the display when you click the number buttons
- Make the calculator work 

7/29/2024
- Make AC (clear) button work
- Fix display not showing secondNumber issue
- Fix display not showing new firstNumber after hitting equals button
- Fix firstNumber and secondNumber not actually resetting issue (needed to explicitly set the variables and use = not ===)

7/30/2024
- Display a snarky message instead and reset the global variables to null if user attempts to divide by zero
- Improve rounding handling to avoid returning values with two zeros after the decimal point
- Store the calculated result as the new firstNumber, and allow the calculator to keep running
- Add CSS pseudoclass button hover and active styling
- Allow numbers to be entered that are greater than one digit long
- Add alert
- Prevent numbers from overflowing the screen
- Add backspace button functionality to delete one character
- Add decimal button functionality
- Make const display a global variable and remove it in all other places it occurs

To do:
- Allow multi number/multi operator expressions (ex. 1+2+3 = 6 // currently gives 3)
- 

Extra credit (for a later time):
- Add keyboard support