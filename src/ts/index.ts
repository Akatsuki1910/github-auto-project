// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];

// ... (Other existing code)

//Added M+ button functionality
const mPlusButton = document.getElementById('m-plus') as HTMLButtonElement;
mPlusButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(currentExpression);
        memoryValue += currentValue;
    } catch (error) {
        console.error("Invalid input for M+");
    }
});
// Added plus/minus button functionality
const plusMinusButton = document.getElementById('plus-minus') as HTMLButtonElement;
plusMinusButton.addEventListener('click', () => {
    if (currentExpression) {
        if (currentExpression.startsWith('-')) {
            currentExpression = currentExpression.slice(1);
        } else {
            currentExpression = '-' + currentExpression;
        }
        display.value = currentExpression;
    }
});
const toggleHistoryDisplayButton = document.getElementById('toggle-history-display') as HTMLButtonElement;
toggleHistoryDisplayButton.addEventListener('click', () => {
  if (historyDisplay.style.display === 'none' || historyDisplay.style.display === '') {
    historyDisplay.style.display = 'block';
    // Added displaying history items
    historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join('');
  } else {
    historyDisplay.style.display = 'none';
  }
});
// ... other code