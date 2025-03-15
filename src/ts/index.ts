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
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    currentExpression += '**';
    currentExpressionDisplay.textContent = currentExpression;
});
const ansButton = document.getElementById('ans') as HTMLButtonElement;
ansButton.addEventListener('click', () => {
    currentExpression += lastAnswer;
    currentExpressionDisplay.textContent = currentExpression;
});
// ... existing sin, cos, tan, abs, open-paren, close-paren, e button event listeners
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    currentExpression += 'Math.log('; //Natural log
    currentExpressionDisplay.textContent = currentExpression;
});
// ... existing code