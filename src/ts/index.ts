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
let fontSize = "1.5em";

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

    const calculatorDiv = document.getElementById("calculator") as HTMLDivElement;
    document.getElementById("toggle-calculator-visibility")?.addEventListener("click", () => {
        calculatorDiv.style.display = calculatorDiv.style.display === "none" ? "grid" : "none";
    });

    document.getElementById("toggle-history-visibility")?.addEventListener("click", () => {
        historyDiv.style.display = historyDiv.style.display === "none" ? "block" : "none";
    });

    document.getElementById("clear-entry")?.addEventListener("click", () => {
        currentInput = "";
        display.value = "0";
        isNegative = false;
    });

    document.getElementById("double")?.addEventListener("click", () => {
        if (currentInput !== "") {
            currentInput = (parseFloat(currentInput) * 2).toString();
            display.value = currentInput;
        }
    });

    document.getElementById("triple")?.addEventListener("click", () => {
        if (currentInput !== "") {
            currentInput = (parseFloat(currentInput) * 3).toString();
            display.value = currentInput;
        }
    });

    document.getElementById("toggle-fontsize")?.addEventListener("click", () => {
      fontSize = fontSize === "1.5em" ? "2em" : "1.5em";
      display.style.fontSize = fontSize;
    });
});
