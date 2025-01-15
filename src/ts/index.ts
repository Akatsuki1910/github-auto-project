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
    const calculateFactorialBtn = document.getElementById("calculateFactorial") as HTMLButtonElement;

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

// ... existing functions for sum, average, median, min, max, duplicate, signChange, cubeRoot, geoMean

//Mode function
const modeBtn = document.getElementById("mode") as HTMLButtonElement;
modeBtn.addEventListener("click", () => {
    // ... existing mode calculation code ...
});
//Range Function
const rangeBtn = document.getElementById("range") as HTMLButtonElement;
rangeBtn.addEventListener("click", () => {
  // ... existing range calculation code ...
});

const standardDeviationBtn = document.getElementById("standardDeviation") as HTMLButtonElement;
standardDeviationBtn.addEventListener("click", () => {
  // ... existing standard deviation code ...
});

//Absolute Value Function
const absoluteValueBtn = document.getElementById("absoluteValue") as HTMLButtonElement;
absoluteValueBtn.addEventListener("click", () => {
   // ... existing absolute value calculation ...
});
 // Generate a random number between 0 and 1
    const randomNumBtn = document.getElementById("randomNum") as HTMLButtonElement;
    randomNumBtn.addEventListener("click", () => {
      const randomNumber = Math.random();
      display.value = randomNumber.toString();
    });
    // ... existing event listeners

});
