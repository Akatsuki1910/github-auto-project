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

    const squareButton = document.getElementById("square") as HTMLButtonElement;
    squareButton.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        currentInput = (currentValue * currentValue).toString();
        display.value = currentInput;
    });

    const cubeButton = document.getElementById("cube") as HTMLButtonElement;
    cubeButton.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        currentInput = (currentValue * currentValue * currentValue).toString();
        display.value = currentInput;
    });

    const factorialButton = document.getElementById("factorial") as HTMLButtonElement;
    factorialButton.addEventListener('click', () => {
        const currentValue = parseInt(display.value);
        if (isNaN(currentValue) || currentValue < 0) {
            currentInput = "Error";
        } else {
            let result = 1;
            for (let i = 1; i <= currentValue; i++) {
                result *= i;
            }
            currentInput = result.toString();
        }
        display.value = currentInput;
    });

    const inverseButton = document.getElementById("inverse") as HTMLButtonElement;
    inverseButton.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        if (currentValue === 0) {
            currentInput = "Error";
        } else {
            currentInput = (1 / currentValue).toString();
        }
        display.value = currentInput;
    });

    const signButton = document.getElementById("sign") as HTMLButtonElement;
    signButton.addEventListener('click', () => {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.value = currentInput;    
    });
});
