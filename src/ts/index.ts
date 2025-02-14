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
let borderRadius = "5px";
let calculatorLayout = "grid";

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code
    // ... other existing event listeners
    // ... other existing event listeners
    // ... other functions (square, cube, factorial, inverse, sign)
    // ... (rest of existing event listeners)
    // ... (rest of existing code)
    //Existing Code for other buttons
    // ... existing button event listeners
    // ... (rest of existing functions)

    document.getElementById("calculate-inverse-cosine")?.addEventListener("click", () => {
        const num = parseFloat(prompt("Enter a number:") || "0");
        const result = Math.acos(num);
        currentInput = result.toString();
        display.value = currentInput;
    });

    document.getElementById("calculate-inverse-tangent")?.addEventListener("click", () => {
        const num = parseFloat(prompt("Enter a number:") || "0");
        const result = Math.atan(num);
        currentInput = result.toString();
        display.value = currentInput;
    });

    document.getElementById("calculate-inverse-secant")?.addEventListener("click", () => {
        const num = parseFloat(prompt("Enter a number:") || "0");
        const result = 1 / Math.cos(num);
        currentInput = result.toString();
        display.value = currentInput;
    });

    document.getElementById("calculate-cosecant")?.addEventListener("click", () => {
        const num = parseFloat(prompt("Enter a number:") || "0");
        const result = 1 / Math.sin(num);
        currentInput = result.toString();
        display.value = currentInput;
    });

    document.getElementById("calculate-cotangent")?.addEventListener("click", () => {
        const num = parseFloat(prompt("Enter a number:") || "0");
        const result = 1 / Math.tan(num);
        currentInput = result.toString();
        display.value = currentInput;
    });

    document.getElementById("calculate-absolute")?.addEventListener("click", () => {
        const num = parseFloat(prompt("Enter a number:") || "0");
        const result = Math.abs(num);
        currentInput = result.toString();
        display.value = currentInput;
    });
});