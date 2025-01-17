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
// ... existing plusMinusBtn code

//Sign Change button functionality
// ... existing signChangeBtn code

// ... existing squaredBtn, cubedBtn, base10LogBtn, naturalLogBtn code

const exp2Btn = document.getElementById("exp2") as HTMLButtonElement;
// ... existing exp2Btn code

const tenPowerXBtn = document.getElementById("tenPowerX") as HTMLButtonElement;
// ... existing tenPowerXBtn code

const sumNumbersBtn = document.getElementById("sumNumbers") as HTMLButtonElement;
// ... existing sumNumbersBtn code

const negateBtn = document.getElementById("negate") as HTMLButtonElement;
// ... existing negateBtn code

// Add percentage button functionality
  const percentBtn = document.getElementById("percent") as HTMLButtonElement;

  percentBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = (currentValue / 100).toString();
    }
  });

 //Fibonacci button
    const fibonacciBtn = document.getElementById("fibonacci") as HTMLButtonElement;

    function fibonacci(n: number): number {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    fibonacciBtn.addEventListener("click", () => {
      const currentValue = parseInt(display.value);
      if (!isNaN(currentValue) && currentValue >=0) {
        const result = fibonacci(currentValue);
        display.value = result.toString();
        currentExpression = `fibonacci(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
      } else{
        display.value = "Error: Input must be a non-negative integer";
      }
    });

// Existing Code ...
});
