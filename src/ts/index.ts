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

//Sum function
 const sumBtn = document.getElementById("sum") as HTMLButtonElement;
 sumBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)){
    let sum = 0;
    for (let i = 1; i<= currentValue; i++){
      sum += i;  
    }
    display.value = sum.toString();
    currentExpression = `sum(${currentValue})`;
    currentExpressionDisplay.textContent = currentExpression;
  }
 });
 //Average Function
 const averageBtn = document.getElementById("average") as HTMLButtonElement;
 averageBtn.addEventListener("click", () =>{
    const numbersString = display.value;
    const numbersArray = numbersString.split(',').map(Number);
    if (numbersArray.some(isNaN)){
      display.value = "Invalid Input";
      return;
    }
  const sum = numbersArray.reduce((acc, num) => acc + num, 0);
    const average = sum / numbersArray.length;
    display.value = average.toString();
    currentExpression = `avg(${numbersString})`;
  currentExpressionDisplay.textContent = currentExpression;
 });
 //Median function
 const medianBtn = document.getElementById("median") as HTMLButtonElement;
 medianBtn.addEventListener("click", () => {
  const numbersString = display.value;
    const numbersArray = numbersString.split(',').map(Number);

    if (numbersArray.some(isNaN)) {
        display.value = "Invalid Input";
        return;
    }

    numbersArray.sort((a, b) => a - b);
    const mid = Math.floor(numbersArray.length / 2);
    const median = numbersArray.length % 2 === 0 ? (numbersArray[mid - 1] + numbersArray[mid]) / 2 : numbersArray[mid];
    display.value = median.toString();
    currentExpression = `median(${numbersString})`;
    currentExpressionDisplay.textContent = currentExpression;
 });

 //Min function
 const minBtn = document.getElementById("min") as HTMLButtonElement;
  minBtn.addEventListener("click", () => {
    const numbersString = display.value;
    const numbersArray = numbersString.split(',').map(Number);
     if (numbersArray.some(isNaN)) {
      display.value = "Invalid Input";
      return;
     }
     const minValue = Math.min(...numbersArray);
     display.value = minValue.toString();
      currentExpression = `min(${numbersString})`;
      currentExpressionDisplay.textContent = currentExpression;
  });

    // ... existing event listeners

});
