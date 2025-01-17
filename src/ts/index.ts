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

const squaredBtn = document.getElementById("squared") as HTMLButtonElement;
squaredBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const result = currentValue * currentValue;
    display.value = result.toString();
    currentExpression = `${currentValue}²`;
    currentExpressionDisplay.textContent = currentExpression;
  }
});

const cubedBtn = document.getElementById("cubed") as HTMLButtonElement;
cubedBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const result = currentValue * currentValue * currentValue;
    display.value = result.toString();
    currentExpression = `${currentValue}³`;
    currentExpressionDisplay.textContent = currentExpression;
  }
});
//Base 10 Log
const base10LogBtn = document.getElementById("base10Log") as HTMLButtonElement;
base10LogBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.log10(currentValue).toString();
    }
});

//Natural Logarithm (ln)
const naturalLogBtn = document.getElementById("naturalLog") as HTMLButtonElement;
naturalLogBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) { // Check for positive input
        display.value = Math.log(currentValue).toString();
        currentExpression = `ln(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
    }
});

// Existing Code ...
});
