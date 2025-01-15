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
    const negateBtn = document.getElementById("negate") as HTMLButtonElement;
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
            // ... existing fibonacci code
        } else if (buttonText === "2<sup>x</sup>") {
            // ... existing 2^x code
        }
    });

     negateBtn.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = (-currentValue).toString();
            currentExpression = display.value; // Update currentExpression
            currentExpressionDisplay.textContent = currentExpression;
        }
    });

    // ... (Existing Event Listeners)
});
