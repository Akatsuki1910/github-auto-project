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
    // ... other functions (square, cube, factorial, inverse, sign)

    const ansButton = document.getElementById("ans") as HTMLButtonElement;
    ansButton.addEventListener('click', () => {
        currentInput = lastAnswer.toString();
        display.value = currentInput;
    });
    // ... (rest of existing event listeners)

    document.getElementById("toggle-sign")?.addEventListener("click", () => {
        if (currentInput !== "") {
            currentInput = (parseFloat(currentInput) * -1).toString();
            display.value = currentInput;
        } else {
            isNegative = !isNegative;
            display.value = isNegative ? "-" : "";
        }
    });

    document.getElementById("reciprocal")?.addEventListener("click", () => {
        if (currentInput !== "") {
            currentInput = (1 / parseFloat(currentInput)).toString();
            display.value = currentInput;
        }
    });

    document.getElementById("euler")?.addEventListener("click", () => {
        currentInput = Math.E.toString();
        display.value = currentInput;
    });

    document.getElementById("parentheses")?.addEventListener("click", () => {
        if (currentInput.includes("(")){
          currentInput += ")";
        } else {
            currentInput += "(";
        }
        display.value = currentInput;
    });
});