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

// ... other button event listeners

//Modulus operator functionality
// ... other functions

//Summation functionality
const summationBtn = document.getElementById("summation") as HTMLButtonElement;
let numbersToSum: number[] = [];

summationBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    numbersToSum.push(currentValue);
    display.value = ""; // Clear the display for the next number
    currentExpression = numbersToSum.join(" + ");
    currentExpressionDisplay.textContent = currentExpression;
  }

equalsBtn.addEventListener("click", () => {
  if (numbersToSum.length > 0) {
    const sum = numbersToSum.reduce((a, b) => a + b, 0);
    display.value = sum.toString();
    currentExpression = "";
    currentExpressionDisplay.textContent = currentExpression;
    numbersToSum = []; // Reset the array for the next summation
  }
});
});
const minBtn = document.getElementById("min") as HTMLButtonElement;
minBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        currentOperator = 'min';
        firstOperand = currentValue;
        currentExpression = `${currentValue} min `;
        currentExpressionDisplay.textContent = currentExpression;
        display.value = "";
    }
});

const maxBtn = document.getElementById("max") as HTMLButtonElement;
maxBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        currentOperator = 'max';
        firstOperand = currentValue;
        currentExpression = `${currentValue} max `;
        currentExpressionDisplay.textContent = currentExpression;
        display.value = "";
    }
});

const signChangeBtn = document.getElementById("signChange") as HTMLButtonElement;
signChangeBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = (-currentValue).toString();
  }
});

});
