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
const calculateSumBtn = document.getElementById("calculateSum") as HTMLButtonElement; // Calculate Sum button
const calculateMeanBtn = document.getElementById("calculateMean") as HTMLButtonElement;
let maxValues: number[] = [];
let minValues: number[] = [];
let sumValues: number[] = [];
let meanValues: number[] = [];

// ... (Existing button event listeners)

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

});