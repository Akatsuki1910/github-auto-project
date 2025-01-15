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
    const fibonacciBtn = document.getElementById("fibonacci") as HTMLButtonElement;

    function fibonacci(n: number): number {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    buttons.forEach((button) => {
        // ... (Existing button event listeners)

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
        }
    });

    // ... (Existing Event Listeners)
});
