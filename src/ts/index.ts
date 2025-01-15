// ... (Existing Code)

// ... existing variables and buttons
// ... existing event listeners
// ... existing functions (cube, inverse, round, etc)

// ... (Existing Code)

// ... existing functions

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... (Existing buttons)
    // ... existing variables
    const copyBtn = document.getElementById("copy") as HTMLButtonElement;
    const fibonacciBtn = document.getElementById("fibonacci") as HTMLButtonElement;
    const exp2Btn = document.getElementById("exp2") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    let currentExpression = "";

    function fibonacci(n: number): number {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    copyBtn.addEventListener("click", () => {
    const displayValue = display.value;
    navigator.clipboard.writeText(displayValue)
      .then(() => {
        alert("Copied to clipboard: " + displayValue); // Optional: Show a success message
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  });

    buttons.forEach((button) => {
        // ... (Existing button event listeners)

        const buttonText = button.textContent;
        if (buttonText === "Fibonacci") {
            const num = parseFloat(display.value);
            if (!isNaN(num) && num >=0 && num <= 50) { // Limit for performance
                const result = fibonacci(num);
                display.value = result.toString();
                currentExpression = result.toString();
                currentExpressionDisplay.textContent = currentExpression; 
            } else {
                display.value = "Error";
                currentExpression = "";
                currentExpressionDisplay.textContent = "Input a number between 0 and 50";
            }
        } else if (buttonText === "2<sup>x</sup>") {
            const num = parseFloat(display.value);
            if (!isNaN(num)) {
                const result = Math.pow(2, num);
                display.value = result.toString();
                currentExpression = result.toString();
                currentExpressionDisplay.textContent = currentExpression;
            } else {
                display.value = "Error";
                currentExpression = "";
                currentExpressionDisplay.textContent = "Input a valid number";
            }
        }
    });

    // ... (Existing Event Listeners)
});
