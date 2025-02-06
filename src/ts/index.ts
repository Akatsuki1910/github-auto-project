// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)

    // ... other button listeners
    // ... existing code
    const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
    duplicateButton.addEventListener("click", () => {
        if (currentInput) {
            currentInput += currentInput;
            display.value = currentInput;
        }
    });

    // ... (Other button event listeners)
    //Reset Button
    // ... existing code

        const fibonacciButton = document.getElementById("fibonacci") as HTMLButtonElement;
        fibonacciButton.addEventListener("click", () => {
          if (currentInput) {
            const n = parseInt(currentInput);
            if (n >= 0) {
              currentInput = fibonacci(n).toString();
              display.value = currentInput;
            } else {
              display.value = "Error: Input must be non-negative";
            }
          }
        });
        function fibonacci(n: number): number {
          if (n <= 1) {
            return n;
          }
          return fibonacci(n - 1) + fibonacci(n - 2);
        }
    // ... rest of the code
});