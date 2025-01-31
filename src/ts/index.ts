// ... (Existing Code)

// Add negate button functionality

// Existing code ...

// ... (Existing event listeners and functions)

//Existing code ...

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;

let memoryValue = 0; // Initialize memory value

function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    updateHistoryDisplay();
    lastAnswer = parseFloat(result); // Store the last answer
}

function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}
// ... other existing buttons

// ... existing code

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code
const display = document.getElementById("display") as HTMLInputElement;
// ... other existing button declarations
// ... existing event listeners
// ... (rest of the existing code)

// ... existing functions ...

    // Reciprocal button functionality (New Feature)
    const reciprocalButton = document.getElementById("reciprocal") as HTMLButtonElement;
    reciprocalButton.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue !== 0) {
            display.value = (1 / currentValue).toString();
            currentExpression += `1/(${currentValue})`;
            currentExpressionDisplay.textContent = currentExpression;
             addToHistory(currentExpression, display.value);
        } else if(currentValue === 0) {
            display.value = "Cannot divide by zero";
        }
    });
// Squared functionality
const squaredButton = document.getElementById("squared") as HTMLButtonElement;
squaredButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      const result = currentValue * currentValue;
      display.value = result.toString();
      currentExpression += `sqr(${currentValue})`;
      currentExpressionDisplay.textContent = currentExpression;
      addToHistory(currentExpression, display.value); // Add to history
    }
  });

//Cubed Functionality (New Feature)
const cubedButton = document.getElementById("cubed") as HTMLButtonElement;
cubedButton.addEventListener('click', () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.pow(currentValue, 3).toString();
    currentExpression += `cube(${currentValue})`;
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, display.value);
  }
});


// Max function
// ... existing max function

//Min/Max button
// ... existing min-max function

// Average function
// ... existing avg function
const summationBtn = document.getElementById("summation") as HTMLButtonElement;
summationBtn.addEventListener('click', () => {
    try {
        const numbers = display.value.split(',').map(Number);
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        display.value = sum.toString();
        currentExpression += `sum(${numbers.join(',')})`;
        currentExpressionDisplay.textContent = currentExpression;
        addToHistory(currentExpression, display.value); // Add to history
    } catch (error) {
        display.value = "Error";
        console.error("Error calculating sum:", error);
    }
});

// ... (rest of existing code)

//Geometric mean
// ... existing geoMean function

// ... existing calculateExpressionButton

// ... existing parenthesesButton

// ... existing fibonacciButton

// ... existing timeButton

// ... existing exp2Button

// ... existing backspace2Button

// ... existing randomNumberButton

// ... existing roundToDecimalButton

// ... existing absoluteButton

// ... existing truncButton

const signChangeButton = document.getElementById("sign-change") as HTMLButtonElement;
signChangeButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});
const clearAllButton = document.getElementById("clear-all") as HTMLButtonElement;

clearAllButton.addEventListener('click', () => {
    display.value = "0";
    currentExpression = "";
    currentExpressionDisplay.textContent = ""; 
});

const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
memoryStoreButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue = currentValue;
        console.log(`Stored ${memoryValue} in memory`); // Log to console for debugging
    }
});

});
