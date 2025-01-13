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
    let memoryValue = 0; // Added memoryValue variable
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
    const floorBtn = document.getElementById("floor") as HTMLButtonElement; // Floor function
    const modBtn = document.getElementById("mod") as HTMLButtonElement; // Modulo operator button
    const roundBtn = document.getElementById("round") as HTMLButtonElement; // Round function button
    const memoryStoreBtn = document.getElementById("memoryStore") as HTMLButtonElement; // Memory Store
    const memoryRecallBtn = document.getElementById("memoryRecall") as HTMLButtonElement; // Memory Recall
    const memoryClearBtn = document.getElementById("memoryClear") as HTMLButtonElement; // Memory Clear
    const memoryAddBtn = document.getElementById("memoryAdd") as HTMLButtonElement; // Memory Add
      const percentBtn = document.getElementById("percent") as HTMLButtonElement; // Percent button
    const lnBtn = document.getElementById("ln") as HTMLButtonElement; // Natural Logarithm button
    const plusMinusBtn = document.getElementById("plusMinus") as HTMLButtonElement;
    const squareBtn = document.getElementById("square") as HTMLButtonElement;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            // ... existing logic
              if (buttonText === "%") {
                // ... existing percentage logic
            }
             else if (buttonText === "ln") {
                // ... existing natural log logic
            }
             else if (buttonText === "±") {
                // ... existing plus/minus logic
             } else if (buttonText === "x²") {
                const currentValue = parseFloat(display.value);
                const squaredValue = currentValue * currentValue;
                display.value = squaredValue.toString();
                currentExpression = squaredValue.toString();
                currentExpressionDisplay.textContent = currentExpression;
            } 
            // ... existing logic
                else if (buttonText === "MS") {
                    // ... existing memory store logic
            } else if (buttonText === "MR") {
               // ... existing memory recall logic
            } else if (buttonText === "MC") {
                // ... existing memory clear logic
            } else if (buttonText === "M+") {
               // ... existing memory add logic
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
