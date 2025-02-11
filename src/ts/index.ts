// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let displayColor = "black";

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    const toggleDisplayColorButton = document.getElementById("toggle-display-color") as HTMLButtonElement;
    toggleDisplayColorButton.addEventListener('click', () => {
        displayColor = displayColor === "black" ? "red" : "black";
        display.style.color = displayColor;
    });

    // ... other existing event listeners
    const openParenButton = document.getElementById("open-paren") as HTMLButtonElement;
    openParenButton.addEventListener('click', () => {
        currentExpression += '(';
        currentExpressionDisplay.textContent = currentExpression;
        currentInput = "";
    });

    const closeParenButton = document.getElementById("close-paren") as HTMLButtonElement;
    closeParenButton.addEventListener('click', () => {
        currentExpression += ')';
        currentExpressionDisplay.textContent = currentExpression;
        currentInput = "";
    });
});