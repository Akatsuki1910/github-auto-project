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
    const expButton = document.getElementById("exp") as HTMLButtonElement;
    expButton.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        currentInput = Math.exp(currentValue).toString();
        display.value = currentInput;
    });

    // ... other functions (square, cube, factorial, inverse, sign)

    const lnButton = document.getElementById("ln") as HTMLButtonElement;
    lnButton.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        if (currentValue <= 0) {
            currentInput = "Error";
        } else {
            currentInput = Math.log(currentValue).toString();
        }
        display.value = currentInput;
    });

    const powerButton = document.getElementById("power") as HTMLButtonElement;
    powerButton.addEventListener('click', () => {
        currentExpression += display.value + "**";
        currentInput = "";
        currentExpressionDisplay.textContent = currentExpression;
        display.value = "";
    });

    const log10Button = document.getElementById("log10") as HTMLButtonElement;
    log10Button.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        if (currentValue <= 0) {
            currentInput = "Error";
        } else {
            currentInput = Math.log10(currentValue).toString();
        }
        display.value = currentInput;
    });
});
