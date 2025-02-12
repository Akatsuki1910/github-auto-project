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

    const clearButton = document.getElementById("clear") as HTMLButtonElement;
    clearButton.addEventListener('click', () => {
        currentInput = "";
        display.value = currentInput;
    });

    const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
    memoryStoreButton.addEventListener('click', () => {
        memoryValue = parseFloat(display.value);
    });

    const memoryRecallButton = document.getElementById("memory-recall") as HTMLButtonElement;
    memoryRecallButton.addEventListener('click', () => {
        currentInput = memoryValue.toString();
        display.value = currentInput;    
    });

    const memoryClearButton = document.getElementById("memory-clear") as HTMLButtonElement;
    memoryClearButton.addEventListener('click', () => {
        memoryValue = 0;
    });

    const sqrtButton = document.getElementById("sqrt") as HTMLButtonElement;
    sqrtButton.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        if (currentValue >= 0) {
            currentInput = Math.sqrt(currentValue).toString();
            display.value = currentInput;
        } else {
            display.value = "Error";
        }
    });

    const percentButton = document.getElementById("percent") as HTMLButtonElement;
    percentButton.addEventListener('click', () => {
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.value = currentInput;
    });

    const piButton = document.getElementById("pi") as HTMLButtonElement;
    piButton.addEventListener('click', () => {
        currentInput = Math.PI.toString();
        display.value = currentInput;
    });
});