// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];
let isScientificNotation = false;
// ... (Other existing code and functions)
// ... existing filters
//Absolute Value
// ... (Existing functions)
//Floor function
// ... existing math functions
//Copy to Clipboard
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
//Toggle Scientific Notation
const toggleScientificNotationButton = document.getElementById('toggle-scientific-notation') as HTMLButtonElement;
toggleScientificNotationButton.addEventListener('click', () => {
    isScientificNotation = !isScientificNotation;
    if(display.value) {
        const num = parseFloat(display.value);
        display.value = isScientificNotation ? num.toExponential() : num.toString();
    }
});
// ... existing toggle functions
// ... existing toggle functions
// ... existing toggle functions

