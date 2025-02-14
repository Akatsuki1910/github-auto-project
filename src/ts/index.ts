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

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    // ... other existing event listeners
    // ... other existing event listeners
    // ... other functions (square, cube, factorial, inverse, sign)

    // ... (rest of existing event listeners)

    // ... (rest of existing code)
    //Existing Code for other buttons

    // ... existing button event listeners

    document.getElementById("calculate-hypotenuse")?.addEventListener("click", () => {
        const sideA = parseFloat(prompt("Enter length of side A:") || "0");
        const sideB = parseFloat(prompt("Enter length of side B:") || "0");
        const hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
        currentInput = hypotenuse.toString();
        display.value = currentInput;
    });

    document.getElementById("calculate-base10-log")?.addEventListener("click", () => {
        const num = parseFloat(prompt("Enter a number:") || "0");
        const result = Math.log10(num);
        currentInput = result.toString();
        display.value = currentInput;        
    });

    document.getElementById("calculate-natural-log")?.addEventListener("click", () => {
        const num = parseFloat(prompt("Enter a number:") || "0");
        const result = Math.log(num);
        currentInput = result.toString();
        display.value = currentInput;
    });
    document.getElementById("toggle-border-radius")?.addEventListener("click", () => {
        const calculator = document.getElementById("calculator") as HTMLDivElement;
        if (borderRadius === "5px") {
            borderRadius = "20px";
        } else {
            borderRadius = "5px";
        }
        calculator.style.borderRadius = borderRadius;
    });

});
