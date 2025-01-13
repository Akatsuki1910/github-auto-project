// ... (Existing Code)

// ... existing variables and buttons
// ... existing event listeners
// ... existing functions (cube, inverse, round, etc)

// ... (Existing Code)

// ... existing functions

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... (Existing buttons)
    // ... existing variables and buttons
    // ... existing event listeners
    // ... existing functions

    let currentExpression = "";
    let isDarkTheme = false;
    const display = document.getElementById("display") as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    const toggleThemeBtn = document.getElementById("toggleTheme") as HTMLButtonElement;
    const parenthesesBtn = document.getElementById("parentheses") as HTMLButtonElement; // Parentheses button
    const eulerBtn = document.getElementById("euler") as HTMLButtonElement; // Euler's number button
    const randomBtn = document.getElementById("random") as HTMLButtonElement; // Random number button
    let openParentheses = 0;
    const sinBtn = document.getElementById("sin") as HTMLButtonElement; //sin button
    const cosBtn = document.getElementById("cos") as HTMLButtonElement; //cos button
    const logBtn = document.getElementById("log") as HTMLButtonElement; //log button
    const expBtn = document.getElementById("exp") as HTMLButtonElement; // Exponential function button
    const absBtn = document.getElementById("abs") as HTMLButtonElement; // Absolute value button
    const sqrtBtn = document.getElementById("sqrt") as HTMLButtonElement; // Square Root button
    const cubeBtn = document.getElementById("cube") as HTMLButtonElement; // Cube button

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            // ... existing logic
            // ... existing logic
            if (buttonText === "( )") {
                // ... existing parentheses logic
            } else if (buttonText === "Toggle Theme") {
               // ... existing toggle theme logic
            } else if (buttonText === "e"){
                // ... existing euler's number logic
            } else if (buttonText === "Rand") {
                // ... existing random number logic
            } else if (buttonText === "sin") {
                // ... existing sin logic
            } else if (buttonText === "cos") {
                // ... existing cos logic
            } else if (buttonText === "log") {
                // ... existing log logic
            } else if (buttonText === "exp") {
                // ... existing exp logic
            } else if (buttonText === "|x|") {
                currentExpression += "Math.abs(";
                openParentheses++;
                currentExpressionDisplay.textContent = currentExpression;
            } else if (buttonText === "√x") {
                try {
                    const result = Math.sqrt(eval(currentExpression));
                    display.value = result.toString();
                    currentExpression = result.toString();
                    currentExpressionDisplay.textContent = currentExpression; 
                } catch (error) {
                    display.value = "Error";
                }
            } else if (buttonText === "x³") {
                try {
                  const result = Math.pow(eval(currentExpression), 3);
                  display.value = result.toString();
                  currentExpression = result.toString();
                  currentExpressionDisplay.textContent = currentExpression;
                } catch (error) {
                  display.value = "Error";
                }
            } else {
              // existing logic
            }

            // ... (Rest of the existing button logic)
        });
    });

    function factorial(n: number): number {
        // ... existing factorial function
    }
    // ...existing logic
});
