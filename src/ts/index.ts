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

    //Cubed Functionality
const cubedBtn = document.getElementById("cubed") as HTMLButtonElement;

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
const negBtn = document.getElementById("neg") as HTMLButtonElement;
negBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});

// 2^x functionality
const exp2Btn = document.getElementById("exp2") as HTMLButtonElement;
exp2Btn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = (2**currentValue).toString();
  }
});
//Expm1 functionality
const expm1Btn = document.getElementById("expm1") as HTMLButtonElement;
expm1Btn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.expm1(currentValue).toString();
  }
});
// ... other button event listeners

//Modulus operator functionality
// ... other functions

//Summation functionality
// ... (rest of the code)

// Ceil Functionality
const ceilBtn = document.getElementById("ceil") as HTMLButtonElement;
ceilBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.ceil(currentValue).toString();
  }
});

// Sign Change Functionality
const signChangeBtn = document.getElementById("signChange") as HTMLButtonElement;
signChangeBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});

// Truncate Functionality
const truncateBtn = document.getElementById("truncate") as HTMLButtonElement;
truncateBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.trunc(currentValue).toString();
    }
});

// 10^x functionality
const exp10Btn = document.getElementById("exp10") as HTMLButtonElement;
exp10Btn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = (10**currentValue).toString();
  }
});
});