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
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            // ... existing logic
           if (buttonText === "="){
              historyData.push(currentExpression + " = " + display.value);
              lastAnswer = parseFloat(display.value); // Store the last answer
           }
            // ... (Existing logic for other buttons)
            if (buttonText === "+/-") {
                if (display.value !== "") {
                    display.value = (-parseFloat(display.value)).toString();
                    currentExpression = display.value;
                    currentExpressionDisplay.textContent = currentExpression;
                }
            }
            if (buttonText === "π") {
                display.value = Math.PI.toString();
                currentExpression += Math.PI;
                currentExpressionDisplay.textContent = currentExpression;
            }
        });
    });

    // ... (Existing Event Listeners)
});

