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
    const eButton = document.getElementById("e") as HTMLButtonElement;
    eButton.addEventListener('click', () => {
        currentInput = currentInput.concat(Math.E.toString());
        display.value = currentInput;
    });
    const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;
    clearHistoryButton.addEventListener('click', () => {
        historyArr.length = 0; // Clear the history array
        historyDiv.innerHTML = ''; // Clear the history display
    });
    const baseConversionButton = document.getElementById("base-conversion") as HTMLButtonElement;
    baseConversionButton.addEventListener('click', () => {
        const base = prompt("Enter base (2-36):", "10");
        if (base !== null) {
            try {
                const num = parseInt(currentInput, 10);
                currentInput = num.toString(parseInt(base, 10));
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
            }
        }
    });

    // ... other existing event listeners
});
