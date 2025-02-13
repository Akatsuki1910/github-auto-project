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
    // ... other existing event listeners
    // ... other functions (square, cube, factorial, inverse, sign)

    // ... (rest of existing event listeners)

    document.getElementById("nth-root")?.addEventListener("click", () => {
        if (currentInput !== "") {
            currentExpression = `Math.pow(${currentInput}, 1/y)`
            currentInput = "";
            display.value = currentInput;
            currentExpressionDisplay.textContent = currentExpression;
        }
    });

    // ... (rest of existing code)
    document.getElementById("toggle-display-color")?.addEventListener("click", () => {
        displayColor = displayColor === "black" ? "red" : "black";
        display.style.color = displayColor;
    });
});