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
       const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
    duplicateButton.addEventListener('click', () => {
        currentInput = currentInput.concat(currentInput);
        display.value = currentInput;
    });
    const squareButton = document.getElementById("square") as HTMLButtonElement;
    squareButton.addEventListener('click', () => {
        try {
            const num = parseFloat(currentInput);
            currentInput = (num * num).toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });
    const cubeRootButton = document.getElementById("cube-root") as HTMLButtonElement;
    cubeRootButton.addEventListener('click', () => {
        try {
            const num = parseFloat(currentInput);
            currentInput = Math.cbrt(num).toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });
    const modButton = document.getElementById("mod") as HTMLButtonElement;
    modButton.addEventListener('click', () => {
        currentInput = currentInput.concat('%');
        currentExpression = currentExpression.concat('%');
        display.value = currentInput;
    });

    // ... other existing event listeners
});