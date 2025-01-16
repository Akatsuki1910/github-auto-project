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

//Negate functionality
const signChangeBtn = document.getElementById("signChange") as HTMLButtonElement;
signChangeBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});
// ... other button event listeners
// ... other functions
//Ln2 functionality
const ln2Btn = document.getElementById("ln2") as HTMLButtonElement;
ln2Btn.addEventListener("click", () => {
  display.value = Math.LN2.toString();
});
// Add expm1 functionality
const expm1Btn = document.getElementById("expm1") as HTMLButtonElement;
expm1Btn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.expm1(currentValue).toString();
    }
});

// Add log2 functionality
const calculateLog2Btn = document.getElementById("calculateLog2") as HTMLButtonElement;
calculateLog2Btn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.log2(currentValue).toString();
  }
});

// Add log10 functionality
const calculateLog10Btn = document.getElementById("calculateLog10") as HTMLButtonElement;
calculateLog10Btn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.log10(currentValue).toString();
    }
});
//Squared Root functionality
const squaredRootBtn = document.getElementById("squaredRoot") as HTMLButtonElement;
squaredRootBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if(!isNaN(currentValue)){
        display.value = Math.sqrt(currentValue).toString();
    }
});
//Inverse Functionality
const inverseBtn = document.getElementById("inverse") as HTMLButtonElement;
inverseBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        display.value = (1/currentValue).toString();
    } else if(currentValue === 0) {
        display.value = "Cannot divide by zero";
    }
});
// ... rest of the code
});
