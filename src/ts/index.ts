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
    // ... existing code
 // Add factorial button
    // ... existing functions

// Add factorial button
    const calculateFactorialBtn = document.getElementById("factorial") as HTMLButtonElement;

    function factorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        } else if (n < 0) {
          return NaN; // Return NaN for negative numbers
        }
        return n * factorial(n - 1);
    }

    calculateFactorialBtn.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const result = factorial(currentValue);
            if (isNaN(result)){
              display.value = "Error: Factorial not defined for negative numbers";
            }else {
              display.value = result.toString();
              currentExpression = `${currentValue}!`;
              currentExpressionDisplay.textContent = currentExpression;
            }
        }
    });

// Existing code ...

// Plus/Minus button functionality
const plusMinusBtn = document.getElementById("plusMinus") as HTMLButtonElement;
plusMinusBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = (-1 * currentValue).toString();
  }
});
//Sign Change button functionality
const signChangeBtn = document.getElementById("signChange") as HTMLButtonElement;
signChangeBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = (-1 * currentValue).toString();
    }
  });

// Existing Code ...
});
