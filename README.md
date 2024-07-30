Learnings and reminders:
- Use "defer" after the link to the javascript external file to delay until window load
- Use "parseFloat" to convert a string into a number (used when converting an ID into a number)
- To set a variable to null, explicitly use "firstNumber = null", not "firstNumber === null"

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
- Display a snarky message instead and reset the global variables to null if user attemps to divide by zero

To do:

- Store the calculated result as the new firstNumber, and allow the calculator to keep running
- Improve rounding handling (currently shows "2.00")


Extra credit:
- Add functionality to the Delete button
- Add functionality to the decimal button