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

    const powerButton = document.getElementById("power") as HTMLButtonElement;
    powerButton.addEventListener('click', () => {
        currentExpression += '**';
        currentExpressionDisplay.textContent = currentExpression;
        currentInput = "";
    });

    const logButton = document.getElementById("log") as HTMLButtonElement;
    logButton.addEventListener('click', () => {
        currentExpression += 'Math.log10('; // Base 10 logarithm
        currentExpressionDisplay.textContent = currentExpression;
        currentInput = "";
    });

    const expButton = document.getElementById("exp") as HTMLButtonElement;
    expButton.addEventListener('click', () => {
        currentExpression += 'Math.exp('; 
        currentExpressionDisplay.textContent = currentExpression;
        currentInput = "";
    });
});