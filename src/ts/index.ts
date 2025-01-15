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

//Reciprocal function (1/x) button
const reciprocalBtn = document.getElementById("reciprocal") as HTMLButtonElement;
reciprocalBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    } else if (currentValue === 0) {
        display.value = "Cannot divide by zero";
    }
});

const roundBtn = document.getElementById("round") as HTMLButtonElement;
roundBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = Math.round(currentValue).toString();
    }
});

const absBtn = document.getElementById("abs") as HTMLButtonElement;
absBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.abs(currentValue).toString();
  }
});
//Floor function button
const floorBtn = document.getElementById("floor") as HTMLButtonElement;
floorBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.floor(currentValue).toString();
    }
});

const sinBtn = document.getElementById("sin") as HTMLButtonElement;
sinBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.sin(currentValue).toString();
  }
});

const cosBtn = document.getElementById("cos") as HTMLButtonElement;
cosBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.cos(currentValue).toString();
  }
});

const tanBtn = document.getElementById("tan") as HTMLButtonElement;
tanBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.tan(currentValue).toString();
  }
});

// Add Euler's number (e) button
const eBtn = document.getElementById("e") as HTMLButtonElement;
eBtn.addEventListener("click", () => {
  display.value = Math.E.toString();
});

// Generate random number button
const randBtn = document.getElementById("rand") as HTMLButtonElement;
randBtn.addEventListener("click", () => {
    display.value = Math.random().toString();
});
// Add natural logarithm (ln) button
const lnBtn = document.getElementById("ln") as HTMLButtonElement;
lnBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue) && currentValue > 0) {
    display.value = Math.log(currentValue).toString();
  } else if (currentValue <= 0) {
    display.value = "Error: ln not defined for non-positive numbers";
  }
});
    // ... existing event listeners

});
