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
const exp2Btn = document.getElementById("exp2") as HTMLButtonElement; // Get 2^x button
const cubeRootBtn = document.getElementById("cube-root") as HTMLButtonElement;
const signChangeBtn = document.getElementById("signChange") as HTMLButtonElement;
const percentageBtn = document.getElementById("percentage") as HTMLButtonElement;
const exitBtn = document.getElementById("exit") as HTMLButtonElement;
const squareRootBtn = document.getElementById("squareRoot") as HTMLButtonElement;

percentageBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
        currentExpression = `(${currentValue} / 100)`;
        currentExpressionDisplay.textContent = currentExpression;        
    }
});

squareRootBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        if (currentValue >= 0) {
            const result = Math.sqrt(currentValue);
            display.value = result.toString();
            currentExpression = `√(${currentValue})`;
            currentExpressionDisplay.textContent = currentExpression;
        } else {
            display.value = "Error: Cannot calculate square root of a negative number.";
            currentExpression = "Error"; // Clear current expression on error
            currentExpressionDisplay.textContent = currentExpression;
        }
    }
});

reciprocalBtn.addEventListener('click', () => {
    // ... (reciprocalBtn logic)
});

squared2Btn.addEventListener('click', () => {
    // ... (squared2Btn logic)
});

exp2Btn.addEventListener('click', () => {
    // ... (exp2Btn logic)
});

cubeRootBtn.addEventListener('click', () => {
    // ... (cubeRootBtn logic)
});

signChangeBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
        currentExpression = `-(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
    }
});
exitBtn.addEventListener('click', () => {
    window.close(); // Close the current browser window/tab
});


// ... (rest of the existing code)
});
