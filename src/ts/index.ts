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
const exp10Btn = document.getElementById("exp10") as HTMLButtonElement;

exp10Btn.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.pow(10, currentValue);
        display.value = result.toString();
        currentExpression += `10^${currentValue}`;
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
        console.error("Error calculating 10^x:", error);
    }
});


const negateBtn = document.getElementById("negate") as HTMLButtonElement;

negateBtn.addEventListener('click', () => {
  if (display.value) {
    display.value = (parseFloat(display.value) * -1).toString();
    // Update current expression
currentExpression = display.value; 
currentExpressionDisplay.textContent = currentExpression;
  }
});

const memoryPlusBtn = document.getElementById("memory-plus") as HTMLButtonElement;
const memoryRecallBtn = document.getElementById("memory-recall") as HTMLButtonElement;
const memoryClearBtn = document.getElementById("memory-clear") as HTMLButtonElement;

memoryPlusBtn.addEventListener('click', () => {
  memoryValue += parseFloat(display.value || '0');
});

memoryRecallBtn.addEventListener('click', () => {
  display.value = memoryValue.toString();
});

memoryClearBtn.addEventListener('click', () => {
  memoryValue = 0;
});
const sinBtn = document.getElementById("sin") as HTMLButtonElement;
sinBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.sin(currentValue);
    display.value = result.toString();
    currentExpression += `sin(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
});

const cosBtn = document.getElementById("cos") as HTMLButtonElement;
cosBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.cos(currentValue);
    display.value = result.toString();
        currentExpression += `cos(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
});

const tanBtn = document.getElementById("tan") as HTMLButtonElement;
tanBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.tan(currentValue);
    display.value = result.toString();
    currentExpression += `tan(${currentValue})`;
    currentExpressionDisplay.textContent = currentExpression;
});
const logBtn = document.getElementById("log") as HTMLButtonElement;
logBtn.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.log10(currentValue);
        display.value = result.toString();
        currentExpression += `log(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
        console.error("Error calculating log:", error);
    }
});
const lnBtn = document.getElementById("ln") as HTMLButtonElement;
lnBtn.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.log(currentValue);
        display.value = result.toString();
        currentExpression += `ln(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression; // Update the display
    } catch (error) {
        display.value = "Error";
        console.error("Error calculating ln:", error);
    }
});
const absBtn = document.getElementById("abs") as HTMLButtonElement;
absBtn.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.abs(currentValue);
        display.value = result.toString();
        currentExpression += `abs(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
        console.error("Error calculating abs:", error); // Add error handling
    }
});
// ... (rest of the existing code)
});
