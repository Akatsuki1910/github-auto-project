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

const productBtn = document.getElementById("product") as HTMLButtonElement;
productBtn.addEventListener('click', () => {
    try {
        const numbers = display.value.split(',').map(Number);
        const product = numbers.reduce((acc, num) => acc * num, 1);
        display.value = product.toString();
        currentExpression += `product(${numbers.join(',')})`;
        currentExpressionDisplay.textContent = currentExpression;
        addToHistory(currentExpression, display.value);
    } catch (error) {
        display.value = "Error";
        console.error("Error calculating product:", error);
    }
});

const openNewWindowButton = document.getElementById("open-new-window") as HTMLButtonElement;
openNewWindowButton.addEventListener('click', () => {
  window.open('https://www.example.com', '_blank');
});
const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    display.value = display.value + display.value; 
});

const scientificNotationButton = document.getElementById("scientific-notation") as HTMLButtonElement;
scientificNotationButton.addEventListener('click', () => {
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    display.value = value.toExponential();
  }
});

const baseConverterButton = document.getElementById("base-converter") as HTMLButtonElement;
baseConverterButton.addEventListener('click', () => {
  // Implement base conversion logic here
  // For simplicity, this example converts to binary
  const decimalValue = parseInt(display.value, 10);
  if (!isNaN(decimalValue)) {
    display.value = decimalValue.toString(2);
  }
});
const cubeRootButton = document.getElementById("cube-root") as HTMLButtonElement;
cubeRootButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.cbrt(value).toString();
        currentExpression += `cbrt(${value})`;
        currentExpressionDisplay.textContent = currentExpression;
        addToHistory(currentExpression, display.value); // Add to history
    }
});

const tenToThePowerOfXButton = document.getElementById("ten-to-the-power-of-x") as HTMLButtonElement;
tenToThePowerOfXButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.pow(10, value).toString();
        addToHistory(`10^${value}`, display.value);
    }
});

const expButton = document.getElementById("exp") as HTMLButtonElement;
expButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.exp(value).toString();
        addToHistory(`e^${value}`, display.value);
    }
});

});
