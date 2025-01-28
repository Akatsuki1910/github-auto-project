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
  const secondOperand =  parseFloat(display.value); // When the next operand is entered
  const result = firstOperand % secondOperand;
  display.value = result.toString();
  currentExpression = `${firstOperand} % ${secondOperand}`; // Or build the expression as you go
  currentExpressionDisplay.textContent = currentExpression;
  addToHistory(currentExpression, result.toString());
});

absBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.abs(currentValue);
    display.value = result.toString();
    currentExpression = `|${currentValue}|`;
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, result.toString());
});

});
