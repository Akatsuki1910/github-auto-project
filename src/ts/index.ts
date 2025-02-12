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
let isNegative = false;

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    // ... other existing event listeners
    const negationButton = document.getElementById("negation") as HTMLButtonElement;
    negationButton.addEventListener('click', () => {
        if (currentInput !== "") {
            currentInput = (parseFloat(currentInput) * -1).toString();
            display.value = currentInput;
        }
    });

    // ... other existing event listeners

    const squareButton = document.getElementById("square") as HTMLButtonElement;
    squareButton.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        currentInput = (currentValue * currentValue).toString();
        display.value = currentInput;
    });
});