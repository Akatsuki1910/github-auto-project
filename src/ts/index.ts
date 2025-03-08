// ... (Existing code)
const keyboardToggleButton = document.getElementById('keyboard-toggle') as HTMLButtonElement;
const virtualKeyboard = document.getElementById('virtual-keyboard') as HTMLDivElement;
const display = document.getElementById('display') as HTMLInputElement;
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let currentExpression: string = '';
let memory: string = '';
let lastResult: string = '';

keyboardToggleButton.addEventListener('click', () => {
    // ... (Existing keyboard toggle logic)
});

// ... (Other existing code)

//Added Feature: History and clear history
function updateHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    renderHistory();
    localStorage.setItem('calculatorHistory', JSON.stringify(history)); // Store history in local storage
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
  localStorage.removeItem('calculatorHistory'); //Clear history from local storage
});

//Retrieve history from local storage on load
window.addEventListener('load', () => {
    const storedHistory = localStorage.getItem('calculatorHistory');
    if (storedHistory) {
        history = JSON.parse(storedHistory);
        renderHistory();
    }
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
        lastResult = result.toString();
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

document.querySelectorAll('.digit, .operator, .decimal, #parenthesis-open, #parenthesis-close, #sin, #cos, #tan').forEach(button => {
  button.addEventListener('click', () => {
    const key = (button as HTMLButtonElement).textContent;
    if (key) {
      currentExpression += key;
      currentExpressionDisplay.textContent = currentExpression; //Added Feature: Displaying Current Expression

      if (key === 'sin' || key === 'cos' || key === 'tan'){
        display.value += `Math.${key}(`;
      } else{
        display.value += key;
      }
    }
  });
});

const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;

memoryStoreButton.addEventListener('click', () => {
    memory = display.value;
});

memoryRecallButton.addEventListener('click', () => {
    display.value += memory; 
    currentExpression += memory; 
    currentExpressionDisplay.textContent = currentExpression;   
});

memoryClearButton.addEventListener('click', () => {
    memory = '';
});
const ansButton = document.getElementById('ans') as HTMLButtonElement;
ansButton.addEventListener('click', () => {
    display.value += lastResult;
    currentExpression += lastResult;
    currentExpressionDisplay.textContent = currentExpression;
});