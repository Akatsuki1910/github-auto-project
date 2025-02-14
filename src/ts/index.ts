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

    //Exponent Function
     document.getElementById("calculate-exponent")?.addEventListener("click", () => {
        const base = parseFloat(prompt("Enter Base:") || "0");
        const exponent = parseFloat(prompt("Enter Exponent:") || "0");
        const result = base ** exponent;
        currentInput = result.toString();
        display.value = currentInput;
     });

    // ... (Existing power functions)

    // ... (Existing reset function)

    // ... (Existing n-root function)

    // ... (Existing random function)
        document.getElementById("calculate-log")?.addEventListener("click", () => {
        const base = parseFloat(prompt("Enter the base (b):") || "10");
        const x = parseFloat(prompt("Enter the number (x):") || "0");
        const result = Math.log(x) / Math.log(base);
        currentInput = result.toString();
        display.value = currentInput;
    });
    //Square function
    document.getElementById("calculate-square")?.addEventListener("click", () => {
        const num = parseFloat(currentInput);
        currentInput = (num * num).toString();
        display.value = currentInput;
    });

    // x^n function
    document.getElementById("calculate-x-to-the-power-n")?.addEventListener("click", () => {
        const x = parseFloat(prompt("Enter x:") || "0");
        const n = parseFloat(prompt("Enter n:") || "0");
        const result = x ** n;
        currentInput = result.toString();
        display.value = currentInput;
    });

    // Calculate Inverse
    document.getElementById("calculate-inverse")?.addEventListener("click", () => {
        const num = parseFloat(currentInput);
        if (num === 0) {
            currentInput = "Error: Division by zero";
        } else {
            currentInput = (1 / num).toString();
        }
        display.value = currentInput;
    });
});
