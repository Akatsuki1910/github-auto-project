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
const reciprocalBtn = document.getElementById("reciprocal") as HTMLButtonElement;
const squared2Btn = document.getElementById("squared2") as HTMLButtonElement; // Get x^2 button

reciprocalBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) { // Check for valid input and non-zero value
        const result = 1 / currentValue;
        display.value = result.toString();
        currentExpression = `1/(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
        addToHistory(currentExpression, result.toString());
    } else {
        display.value = "Cannot divide by zero";
    }
});

squared2Btn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = currentValue * currentValue; // Calculate square
        display.value = result.toString();
        currentExpression = `(${currentValue})^2`;
        currentExpressionDisplay.textContent = currentExpression; // Update the display
        addToHistory(currentExpression, result.toString());
    } else {
        display.value = "Invalid input";
    }
});

const cubeBtn = document.getElementById("cube") as HTMLButtonElement; // Get the cube button element
const modBtn = document.getElementById("mod") as HTMLButtonElement;
const absBtn = document.getElementById("abs") as HTMLButtonElement;
const floorBtn = document.getElementById("floor") as HTMLButtonElement;
const randomBtn = document.getElementById("random") as HTMLButtonElement;
const maxBtn = document.getElementById("max") as HTMLButtonElement; // Max button element
const minBtn = document.getElementById("min") as HTMLButtonElement; // Min button element
const sumBtn = document.getElementById("sum") as HTMLButtonElement; // Sum button element
const meanBtn = document.getElementById("mean") as HTMLButtonElement; // Mean button element
const calculateMaxBtn = document.getElementById("calculateMax") as HTMLButtonElement; // Calculate Max button
const calculateMinBtn = document.getElementById("calculateMin") as HTMLButtonElement;
const calculateSumBtn = document.getElementById("calculateSum") as HTMLButtonElement; // Calculate Sum button
const calculateMeanBtn = document.getElementById("calculateMean") as HTMLButtonElement;
const duplicateBtn = document.getElementById("duplicate") as HTMLButtonElement; // Duplicate button element
const eulerBtn = document.getElementById("Euler") as HTMLButtonElement; // Euler's number button
const lnBtn = document.getElementById("ln") as HTMLButtonElement; // Natural logarithm button
const exp10Btn = document.getElementById("exp10") as HTMLButtonElement; // 10^x button
let maxValues: number[] = [];
let minValues: number[] = [];
let sumValues: number[] = [];
let meanValues: number[] = [];

// ... (Existing button event listeners)

exp10Btn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.pow(10, currentValue);
        display.value = result.toString();
        currentExpression = `10^(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
        addToHistory(currentExpression, result.toString());
    } else {
        display.value = "Invalid input";
    }
});


calculateMeanBtn.addEventListener('click', () => {
    if (meanValues.length === 0) {
        display.value = "No values entered";
    } else {
        const sum = meanValues.reduce((a, b) => a + b, 0);
        const result = sum / meanValues.length;
        display.value = result.toString();
        currentExpression = `mean(${meanValues.join(',')})`;
        currentExpressionDisplay.textContent = currentExpression;
        addToHistory(currentExpression, result.toString());
    }
    meanValues = []; // Clear meanValues after calculation
});

duplicateBtn.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        display.value = currentValue + currentValue;
    }
});

eulerBtn.addEventListener('click', () => {
  display.value = Math.E.toString();
});

lnBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) { // Check for valid input and positive number
      const result = Math.log(currentValue);
      display.value = result.toString();
      currentExpression = `ln(${currentValue})`;
      currentExpressionDisplay.textContent = currentExpression;
      addToHistory(currentExpression, result.toString());
    } else {
      display.value = "Invalid input";
    }
  });

});
