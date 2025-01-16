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
const modBtn = document.getElementById("mod") as HTMLButtonElement;
modBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)){
        currentOperator = '%';
        firstOperand = currentValue;
        currentExpression = `${currentValue}%`;
        currentExpressionDisplay.textContent = currentExpression;
        display.value = "";
    }
});

//Summation functionality
const sumBtn = document.getElementById("sum") as HTMLButtonElement;
sumBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        let sum = 0;
        for (let i = 1; i <= currentValue; i++) {
            sum += i;
        }
        display.value = sum.toString();
        currentExpression = `∑${currentValue}`;
        currentExpressionDisplay.textContent = currentExpression;
    }
});

// 10 to the power of x functionality
const tenToThePowerOfXBtn = document.getElementById("tenToThePowerOfX") as HTMLButtonElement;
tenToThePowerOfXBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const result = Math.pow(10, currentValue);
    display.value = result.toString();
    currentExpression = `10^${currentValue}`;
    currentExpressionDisplay.textContent = currentExpression;
  }
});
// Sign change functionality
const signBtn = document.getElementById("sign") as HTMLButtonElement;
signBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = (-currentValue).toString();
  }
});
// Inverse functionality
const inverseBtn = document.getElementById("inverse") as HTMLButtonElement;
inverseBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue) && currentValue !== 0) {
    display.value = (1/currentValue).toString();
      currentExpression = `1/${currentValue}`;
      currentExpressionDisplay.textContent = currentExpression;  }
});

//Cuberoot functionality
const cuberootBtn = document.getElementById("cuberoot") as HTMLButtonElement;
cuberootBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.cbrt(currentValue);
        display.value = result.toString();
        currentExpression = `∛${currentValue}`;
        currentExpressionDisplay.textContent = currentExpression;
    }
});

// Percentage button functionality
const percentBtn = document.getElementById("percent") as HTMLButtonElement;
percentBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
    }
});

const randomBtn = document.getElementById("random") as HTMLButtonElement;
randomBtn.addEventListener("click", () => {
  const randomNumber = Math.random();
  display.value = randomNumber.toString();
});

});
