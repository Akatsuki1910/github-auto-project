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
const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton.addEventListener('click', () => {
    currentExpression += 'Math.sin('; // Add sin function
    currentExpressionDisplay.textContent = currentExpression;
});
const cosButton = document.getElementById('cos') as HTMLButtonElement;
cosButton.addEventListener('click', () => {
    currentExpression += 'Math.cos('; // Add cos function
    currentExpressionDisplay.textContent = currentExpression;
});
const tanButton = document.getElementById('tan') as HTMLButtonElement;
tanButton.addEventListener('click', () => {
    currentExpression += 'Math.tan('; // Add tan function
    currentExpressionDisplay.textContent = currentExpression;
});
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    currentExpression += 'Math.abs('; // Add abs function
    currentExpressionDisplay.textContent = currentExpression;
});
const openParenButton = document.getElementById('open-paren') as HTMLButtonElement;
openParenButton.addEventListener('click', () => {
    currentExpression += '(';
    currentExpressionDisplay.textContent = currentExpression;
});
const closeParenButton = document.getElementById('close-paren') as HTMLButtonElement;
closeParenButton.addEventListener('click', () => {
    currentExpression += ')';
    currentExpressionDisplay.textContent = currentExpression;
});
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    currentExpression += 'Math.E';
    currentExpressionDisplay.textContent = currentExpression;
});
// ... existing code