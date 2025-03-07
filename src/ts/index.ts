// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let memoryValue = 0;
// Memory functions (unchanged)
// ...
// Cube Root (unchanged)
// ...
// Ln (unchanged)
// ...

//Parentheses
const parenthesesButton = document.getElementById('parentheses') as HTMLButtonElement;
let openParentheses = false;
parenthesesButton.addEventListener('click', () => {
    if (!openParentheses) {
        display.value += '(';
        openParentheses = true;
    } else {
        display.value += ')';
        openParentheses = false;
    }
});
//Clear Entry
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
clearEntryButton.addEventListener('click', () => {
    display.value = '';
});

//Euler's number
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    display.value = Math.E.toString();
});
const doubleButton = document.getElementById('double') as HTMLButtonElement;
doubleButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = currentValue * 2;
        display.value = result.toString();
        currentExpressionDisplay.textContent = `${currentValue} * 2 = ${result}`;
    }
});
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value += '%';
    }
});
const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
// Basic Calculator Functions
// ... (rest of the code)