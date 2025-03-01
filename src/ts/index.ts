// ... (Existing code)

// ... (Existing variable declarations)

// ... (Existing Event Listeners)

// ... other button event listeners

//Added feature: Keyboard support for digits and operators
// ... Existing keyboard event listener

// Added parentheses buttons
// ... Existing parenthesis button event listeners

let ans = 0;
// ... Existing equals button event listener

// ... existing ans button event listener

//Added exp button
// ... Existing exp button event listener

// ... existing other functions

//Added deg button
// ... Existing deg button event listener

//Added rad button
// ... Existing rad button event listener

//Added negate button
// ... Existing negate button event listener

//Added copy button
// ... Existing copy button event listener

//Added toggle basic button to toggle scientific section display
// ... Existing toggle basic button event listener

// History Feature
const historySection = document.getElementById('history-section') as HTMLDivElement;
let history: string[] = [];

const toggleHistoryButton = document.getElementById('toggle-history') as HTMLButtonElement;
toggleHistoryButton.addEventListener('click', () => {
    historySection.style.display = historySection.style.display === 'none' ? 'block' : 'none';
});

const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
    history = [];
    historySection.innerHTML = '';
});

function updateHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    historySection.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}

// ... (Existing equals button event listener) - Add this line inside the listener
updateHistory(currentExpression, display.value);

//Added Clear Expression (CE) button
const clearExpressionButton = document.getElementById('clear-expression') as HTMLButtonElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let currentExpression = '';

clearExpressionButton.addEventListener('click', () => {
  currentExpression = '';
  currentExpressionDisplay.textContent = '';
});

display.addEventListener('input', () => {
    currentExpression = display.value;
    currentExpressionDisplay.textContent = currentExpression; 
});