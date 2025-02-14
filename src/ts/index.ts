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

    // ... (Existing trigonometric functions)

    // Calculate Percentage
    document.getElementById("calculate-percentage")?.addEventListener("click", () => {
        const num = parseFloat(prompt("Enter a number:") || "0");
        const percentage = parseFloat(prompt("Enter percentage:") || "0");
        const result = (num * percentage) / 100;
        currentInput = result.toString();
        display.value = currentInput;
    });

        // ... existing functions
    // ... other existing functions
     //Fibonacci
    document.getElementById("calculate-fibonacci")?.addEventListener("click", () => {
      const n = parseInt(prompt("Enter the number of terms for the Fibonacci sequence:") || "0");
      let result = "";
      let a = 0, b = 1;
      for (let i = 0; i < n; i++) {
        result += a + " ";
        const temp = a;
        a = b;
        b += temp;
      }
      currentInput = result;
      display.value = currentInput;
    });

    document.getElementById("calculate-10-to-the-power-x")?.addEventListener("click", () => {
        const num = parseFloat(prompt("Enter a number:") || "0");
        const result = 10 ** num;
        currentInput = result.toString();
        display.value = currentInput;
    });

    document.getElementById("calculate-2-to-the-power-x")?.addEventListener("click", () => {
        const num = parseFloat(prompt("Enter a number:") || "0");
        const result = 2 ** num;
        currentInput = result.toString();
        display.value = currentInput;
    });

    document.getElementById("calculate-e-to-the-power-x")?.addEventListener("click", () => {
        const num = parseFloat(prompt("Enter a number:") || "0");
        const result = Math.E ** num;
        currentInput = result.toString();
        display.value = currentInput;
    });

    document.getElementById("reset")?.addEventListener("click", () => {
        currentInput = "";
        currentExpression = "";
        display.value = "";
        currentExpressionDisplay.textContent = "";
        historyArr.length = 0;
        historyDiv.innerHTML = "";
        lastAnswer = 0;
        memoryValue = 0;
    });

    document.getElementById("calculate-n-root")?.addEventListener("click", () => {
        const n = parseFloat(prompt("Enter the root (n):") || "2");
        const x = parseFloat(prompt("Enter the number (x):") || "0");
        const result = x ** (1/n);
        currentInput = result.toString();
        display.value = currentInput;
    });

    document.getElementById("calculate-random")?.addEventListener("click", () => {
        const result = Math.random();
        currentInput = result.toString();
        display.value = currentInput;
    });
});