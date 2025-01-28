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
let maxValues: number[] = [];
let minValues: number[] = [];
let sumValues: number[] = [];
let meanValues: number[] = [];

// Cube functionality
cubeBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = currentValue * currentValue * currentValue;
    display.value = result.toString();
    currentExpression = `(${currentValue})^3`;
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, result.toString());
});

//Mod functionality
modBtn.addEventListener('click', () => {
  const currentValue = parseFloat(display.value);
  currentExpression += "mod";
  currentExpressionDisplay.textContent = currentExpression;
  // Implement logic to store current value and await next operand

  // Example (you'll need to implement the actual calculation):
  // Let's assume we have the first operand stored and the second operand is entered
  const firstOperand = currentValue; // Replace with the actual stored first operand
 
});

absBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.abs(currentValue);
    display.value = result.toString();
    currentExpression = `|${currentValue}|`;
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, result.toString());
});

floorBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.floor(currentValue);
    display.value = result.toString();
    currentExpression = `floor(${currentValue})`;
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, result.toString());
});

randomBtn.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
    currentExpression = "random";
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, randomNumber.toString());
});

maxBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    maxValues.push(currentValue);
    currentExpression += `${currentValue},`;
    currentExpressionDisplay.textContent = currentExpression + "..."; // Indicate more inputs expected
    display.value = ""; // Clear the display for next input
});

minBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    minValues.push(currentValue);
    currentExpression += `${currentValue},`;
    currentExpressionDisplay.textContent = currentExpression + "..."; // Indicate more inputs expected
    display.value = ""; // Clear the display for next input
});

sumBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    sumValues.push(currentValue);
    currentExpression += `${currentValue}+`;
    currentExpressionDisplay.textContent = currentExpression + "...";
    display.value = "";
});

meanBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    meanValues.push(currentValue);
    currentExpression += `${currentValue},`; // Use comma as separator for mean
    currentExpressionDisplay.textContent = currentExpression + "...";
    display.value = "";
});

calculateMaxBtn.addEventListener('click', () => {
  if (maxValues.length === 0) {
    display.value = "No values entered";
  } else {
    const result = Math.max(...maxValues);
    display.value = result.toString();
    currentExpression = `max(${maxValues.join(',')})`;
    currentExpressionDisplay.textContent = currentExpression; // Update current expression display
    addToHistory(currentExpression, result.toString()); 
  }
  maxValues = []; // Clear maxValues after calculation
});

calculateMinBtn.addEventListener('click', () => {
    if (minValues.length === 0) {
      display.value = "No values entered";
    } else {
      const result = Math.min(...minValues);
      display.value = result.toString();
      currentExpression = `min(${minValues.join(',')})`;
      currentExpressionDisplay.textContent = currentExpression; // Update current expression display
      addToHistory(currentExpression, result.toString());
    }
    minValues = []; // Clear minValues after calculation
  });

});