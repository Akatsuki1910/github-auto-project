// ... (Existing code)

const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
let history: string[] = [];
let parenthesisOpen = false;

// ... (Other existing code)

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    const parenthesisButton = document.getElementById("parenthesis") as HTMLButtonElement;
    parenthesisButton.addEventListener("click", () => {
        if (parenthesisOpen) {
            currentInput += ")";
            currentExpression += ")";
            parenthesisOpen = false;
        } else {
            currentInput += "(";
            currentExpression += "(";
            parenthesisOpen = true;
        }
        display.value = currentInput;
        currentExpressionDisplay.textContent = currentExpression;
    });

    // ... (rest of the existing code)
});

// ... (Existing functions like factorial)
