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

    document.getElementById("sum")?.addEventListener("click", () => {
        const numbers = currentInput.split(",").map(Number);
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        currentInput = sum.toString();
        display.value = currentInput;
    });

    document.getElementById("average")?.addEventListener("click", () => {
        const numbers = currentInput.split(",").map(Number);
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const avg = sum / numbers.length;
        currentInput = avg.toString();
        display.value = currentInput;
    });

    document.getElementById("min")?.addEventListener("click", () => {
        const numbers = currentInput.split(",").map(Number);
        const min = Math.min(...numbers);
        currentInput = min.toString();
        display.value = currentInput;
    });

    document.getElementById("max")?.addEventListener("click", () => {
        const numbers = currentInput.split(",").map(Number);
        const max = Math.max(...numbers);
        currentInput = max.toString();
        display.value = currentInput;
    });
});