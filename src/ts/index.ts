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
    let lastAnswer = 0; // Store the last answer
    const display = document.getElementById("display") as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    const toggleThemeBtn = document.getElementById("toggleTheme") as HTMLButtonElement;
    const history = document.getElementById("history") as HTMLDivElement;
    const historyBtn = document.getElementById("historyBtn") as HTMLButtonElement;
    const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement; // Added Clear History Button
    let historyData: string[] = [];
    const lastAnswerBtn = document.getElementById("lastAnswer") as HTMLButtonElement; // Add Last Answer Button
    const memoryPlusBtn = document.getElementById("memoryPlus") as HTMLButtonElement;
    const memoryRecallBtn = document.getElementById("memoryRecall") as HTMLButtonElement;
    const memoryClearBtn = document.getElementById("memoryClear") as HTMLButtonElement; // Memory functions
    const sqrtBtn = document.getElementById("sqrt") as HTMLButtonElement; // Square Root button
    const percentageBtn = document.getElementById("percentage") as HTMLButtonElement; // Percentage button
    const decimalBtn = document.getElementById("decimal") as HTMLButtonElement; // Decimal button
    const backspaceBtn = document.getElementById("backspace") as HTMLButtonElement; // Backspace button
    const signBtn = document.getElementById("sign") as HTMLButtonElement; // Sign change button
    const piBtn = document.getElementById("pi") as HTMLButtonElement; // Pi button
    const factorialBtn = document.getElementById("factorial") as HTMLButtonElement; // Factorial button
    const powerBtn = document.getElementById("power") as HTMLButtonElement; // Power button
    const logBtn = document.getElementById("log") as HTMLButtonElement; // Logarithm button
    const expBtn = document.getElementById("exp") as HTMLButtonElement; // Exponential function button
    const openParenBtn = document.getElementById("openParen") as HTMLButtonElement;
    const closeParenBtn = document.getElementById("closeParen") as HTMLButtonElement;
    const buttons = document.querySelectorAll("button");

    function factorial(n: number): number {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            // ... existing logic
           if (buttonText === "="){
              historyData.push(currentExpression + " = " + display.value);
              lastAnswer = parseFloat(display.value); // Store the last answer
           }
            // ... (Existing logic for other buttons)
           if (buttonText === "(") {
                currentExpression += "(";
                currentExpressionDisplay.textContent = currentExpression;
            }
            if (buttonText === ")") {
                currentExpression += ")";
                currentExpressionDisplay.textContent = currentExpression;
            }
            // Existing code for other buttons...
        });
    });

    // ... (Existing Event Listeners)
});


