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
const maxBtn = document.getElementById("max") as HTMLButtonElement;
maxBtn.addEventListener('click', () => {
  try {
    const numbers = display.value.split(',').map(Number);
    const maxVal = Math.max(...numbers);
    display.value = maxVal.toString();
    currentExpression += `max(${numbers.join(',')})`;
    currentExpressionDisplay.textContent = currentExpression;
  } catch (error) {
    display.value = "Error";
    console.error("Error calculating max:", error); // Add error handling
  }
});

//Min/Max button
const minMaxBtn = document.getElementById("min-max") as HTMLButtonElement;
minMaxBtn.addEventListener('click', () => {
    try{
        const numbers = display.value.split(',').map(Number);
        const minVal = Math.min(...numbers);
        const maxVal = Math.max(...numbers);
        display.value = `Min: ${minVal}, Max: ${maxVal}`;
        currentExpression += `min/max(${numbers.join(',')})`;
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
        console.error("Error calculating min/max:", error);
    }
});

});
