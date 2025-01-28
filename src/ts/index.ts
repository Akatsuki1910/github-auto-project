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
const memoryStoreBtn = document.getElementById("memory-store") as HTMLButtonElement;
const memoryRecallBtn = document.getElementById("memory-recall") as HTMLButtonElement;
const memoryClearBtn = document.getElementById("memory-clear") as HTMLButtonElement;
const sinBtn = document.getElementById("sin") as HTMLButtonElement;
const cosBtn = document.getElementById("cos") as HTMLButtonElement;
const tanBtn = document.getElementById("tan") as HTMLButtonElement;
const logBtn = document.getElementById("log") as HTMLButtonElement;
const expBtn = document.getElementById("exp") as HTMLButtonElement;
const ansBtn = document.getElementById("ans") as HTMLButtonElement; // Get the Ans button
const roundBtn = document.getElementById("round") as HTMLButtonElement;
const signBtn = document.getElementById("sign") as HTMLButtonElement; // Get the sign button element
const inverseBtn = document.getElementById("inverse") as HTMLButtonElement; // Get the inverse button element
const squaredBtn = document.getElementById("squared") as HTMLButtonElement; // Get the squared button element

// ... other existing event listeners

inverseBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (currentValue === 0) {
        display.value = "Error: Division by zero";
    } else {
        const result = 1 / currentValue;
        display.value = result.toString();
        currentExpression = `1/(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
        addToHistory(currentExpression, result.toString());
    }
});
memoryStoreBtn.addEventListener('click', () => {
    memoryValue = parseFloat(display.value);
});

memoryRecallBtn.addEventListener('click', () => {
    display.value = memoryValue.toString();
});

memoryClearBtn.addEventListener('click', () => {
    memoryValue = 0;
});
sinBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.sin(currentValue);
    display.value = result.toString();
    currentExpression = `sin(${currentValue})`;
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, result.toString());
});

cosBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.cos(currentValue);
    display.value = result.toString();
    currentExpression = `cos(${currentValue})`;
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, result.toString());
});

tanBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.tan(currentValue);
    display.value = result.toString();
    currentExpression = `tan(${currentValue})`;
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, result.toString());
});

logBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.log10(currentValue);
    display.value = result.toString();
    currentExpression = `log(${currentValue})`;
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, result.toString());
});
expBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.exp(currentValue);
    display.value = result.toString();
    currentExpression = `exp(${currentValue})`;
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, result.toString());
});

ansBtn.addEventListener('click', () => { // Ans button functionality
    display.value = lastAnswer.toString();
});

roundBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.round(currentValue);
    display.value = result.toString();
    addToHistory(`round(${currentValue})`, result.toString());
});

signBtn.addEventListener('click', () => { // Sign change functionality
    const currentValue = parseFloat(display.value);
    display.value = (-currentValue).toString();
});

squaredBtn.addEventListener('click', () => { // Squared functionality
    const currentValue = parseFloat(display.value);
    const result = currentValue * currentValue;
    display.value = result.toString();
    currentExpression = `(${currentValue})^2`;
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, result.toString());
});

// Rest of your existing code
});