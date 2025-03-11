// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];

// ... (Other existing code)

// Added plus/minus button functionality
const plusMinusButton = document.getElementById('plus-minus') as HTMLButtonElement;
plusMinusButton.addEventListener('click', () => {
    if (currentExpression !== '' && currentExpression[0] !== '-') {
        currentExpression = '-' + currentExpression;
    } else if (currentExpression !== '' && currentExpression[0] === '-') {
        currentExpression = currentExpression.substring(1);
    }
    currentExpressionDisplay.textContent = currentExpression;
});

//Added copy expression functionality
document.getElementById('copy-expression').addEventListener('click', () => {
    navigator.clipboard.writeText(currentExpression);
});

// Added left/right parenthesis buttons
document.getElementById('left-parenthesis').addEventListener('click', () => {
    currentExpression += '(';
    currentExpressionDisplay.textContent = currentExpression;
});
document.getElementById('right-parenthesis').addEventListener('click', () => {
    currentExpression += ')';
    currentExpressionDisplay.textContent = currentExpression;
});

//Added history toggle button
document.getElementById('history').addEventListener('click', () => {
  if (historyDisplay.style.display === 'none' || historyDisplay.style.display === '') {
    historyDisplay.style.display = 'block';
    historyDisplay.innerHTML = history.join('<br>');
  } else {
    historyDisplay.style.display = 'none';
}
});

//Added clear display button
const clearDisplayButton = document.getElementById('clear-display') as HTMLButtonElement;
clearDisplayButton.addEventListener('click', () => {
  currentExpression = '';
  currentExpressionDisplay.textContent = '';
});