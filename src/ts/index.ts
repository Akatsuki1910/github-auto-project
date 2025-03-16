// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];
// ... (Other existing code and functions)
// ... existing filters
//Absolute Value
// ... (Existing functions)
//Floor function
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    currentExpression += 'Math.floor('; //Floor function
    currentExpressionDisplay.textContent = currentExpression;
});
//Ceil function
const ceilButton = document.getElementById('ceil') as HTMLButtonElement;
ceilButton.addEventListener('click', () => {
    currentExpression += 'Math.ceil('; //Ceil function
    currentExpressionDisplay.textContent = currentExpression;
});
//Max function
const maxButton = document.getElementById('max') as HTMLButtonElement;
maxButton.addEventListener('click', () => {
    currentExpression += 'Math.max('; //Max function
    currentExpressionDisplay.textContent = currentExpression;
});
//Min function
const minButton = document.getElementById('min') as HTMLButtonElement;
minButton.addEventListener('click', () => {
    currentExpression += 'Math.min('; //Min function
    currentExpressionDisplay.textContent = currentExpression;
});
// ... existing code
// ... (Existing functions)
// ... existing buttons
// ... existing toggle functions
// ... existing functions for month, year, day, second, millisecond, minute, hour, etc.
// ... existing functions
// ... existing functions
// ... (Existing functions)
// ... existing event listeners
// ... existing button event listeners
// ... existing code