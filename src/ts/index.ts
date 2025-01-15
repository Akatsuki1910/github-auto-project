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
    const numbersString = display.value;
    const numbersArray = numbersString.split(',').map(Number);

    if (numbersArray.some(isNaN)) {
        display.value = "Invalid Input";
        return;
    }

    const counts = new Map();
    let maxCount = 0;
    let mode = [];

    for (const num of numbersArray) {
        const count = (counts.get(num) || 0) + 1;
        counts.set(num, count);
        if (count > maxCount) {
            maxCount = count;
            mode = [num];
        } else if (count === maxCount) {
            mode.push(num);
        }
    }

    display.value = mode.join(',');
    currentExpression = `mode(${numbersString})`;
    currentExpressionDisplay.textContent = currentExpression;
});
//Range Function
const rangeBtn = document.getElementById("range") as HTMLButtonElement;
rangeBtn.addEventListener("click", () => {
  const numbersString = display.value;
  const numbersArray = numbersString.split(',').map(Number);

  if (numbersArray.some(isNaN)) {
      display.value = "Invalid Input";
      return;
  }
    numbersArray.sort((a,b) => a-b )
    const range = numbersArray[numbersArray.length -1] - numbersArray[0];
   display.value = range.toString();
  currentExpression = `range(${numbersString})`;
  currentExpressionDisplay.textContent = currentExpression;
});

    // ... existing event listeners

});
