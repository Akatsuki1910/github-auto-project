// ... (Existing code)
const keyboardToggleButton = document.getElementById('keyboard-toggle') as HTMLButtonElement;
const virtualKeyboard = document.getElementById('virtual-keyboard') as HTMLDivElement;
const display = document.getElementById('display') as HTMLInputElement;
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let currentExpression: string = '';

keyboardToggleButton.addEventListener('click', () => {
    // ... (Existing keyboard toggle logic)
});

// ... (Other existing code)

//Added Feature: History and clear history
function updateHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    renderHistory();
}

function renderHistory() {
    historyDisplay.innerHTML = '';
    history.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        historyDisplay.appendChild(p);
    });
}

const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
  history = [];
  renderHistory();
});

// Example usage within the virtual keyboard click listener or other relevant areas:
//...
else if (key === '=') {
    try {
        const result = eval(display.value);
        display.value = result.toString();
        updateHistory(currentExpression, result.toString()); //Update History Feature added
        currentExpression = ''; // Clear current expression after evaluation
        currentExpressionDisplay.textContent = ''; // Clear the display
    }
    // ... rest of the code
}

const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
    currentExpression = currentExpression.slice(0, -1); // Update current expression
    currentExpressionDisplay.textContent = currentExpression;
});

// ... (rest of the code)

const currentExpressionButton = document.getElementById('current-expression') as HTMLButtonElement;
currentExpressionButton.addEventListener('click', () => {
    display.value = currentExpression;
});

document.querySelectorAll('.digit, .operator, .decimal').forEach(button => {
  button.addEventListener('click', () => {
    const key = (button as HTMLButtonElement).textContent;
    if (key) {
      currentExpression += key;
      currentExpressionDisplay.textContent = currentExpression; //Added Feature: Displaying Current Expression
      display.value += key;
    }
  });
});