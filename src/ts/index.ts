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
    display.value += Math.E.toString(); // append E to display
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
    display.value += '%'; // Simply append % to the display
});
const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
// Basic Calculator Functions
// ... (rest of the code)
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const historyButton = document.getElementById('history') as HTMLButtonElement;
let history: string[] = [];
historyButton.addEventListener('click', () => {
    if (historyDisplay.style.display === 'block') {
        historyDisplay.style.display = 'none';
    } else {
        historyDisplay.style.display = 'block';
        historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    }
});

//Added Feature: Theme Toggle
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
});

//Added Feature: calculate square of a number
const squareButton = document.getElementById('square') as HTMLButtonElement;
squareButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if(!isNaN(currentValue)){
        const result = currentValue * currentValue;
        display.value = result.toString();
        currentExpressionDisplay.textContent = `${currentValue}² = ${result}`;
    }
});

//Added Feature: Sine function
const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton.addEventListener('click', () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const result = Math.sin(currentValue);
    display.value = result.toString();
    currentExpressionDisplay.textContent = `sin(${currentValue}) = ${result}`;
  }
});
