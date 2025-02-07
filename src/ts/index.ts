// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)

    const squareButton = document.getElementById("square") as HTMLButtonElement;
    squareButton.addEventListener("click", () => {
        const num = parseFloat(currentInput);
        if (isNaN(num)) {
            currentInput = "Error";
        } else {
            currentInput = (num * num).toString();
        }
        updateDisplay();
    });

    const cubeButton = document.getElementById("cube") as HTMLButtonElement;
    cubeButton.addEventListener("click", () => {
        const num = parseFloat(currentInput);
        if (isNaN(num)) {
            currentInput = "Error";
        } else {
            currentInput = (num * num * num).toString();
        }
        updateDisplay();
    });

    const inverseButton = document.getElementById("inverse") as HTMLButtonElement;
    inverseButton.addEventListener("click", () => {
        const num = parseFloat(currentInput);
        if (isNaN(num) || num === 0) {
            currentInput = "Error";
        } else {
            currentInput = (1 / num).toString();
        }
        updateDisplay();
    });

    // ... other event listeners
});

function factorial(n: number): number {
    if (n < 0) return -1; // Error: Factorial not defined for negative numbers
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function updateDisplay() {
    display.value = currentInput;
}