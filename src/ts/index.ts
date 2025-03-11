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
// ... (Existing functions)

// Added calculate expression functionality
const calculateExpressionButton = document.getElementById('calculate-expression') as HTMLButtonElement;
calculateExpressionButton.addEventListener('click', () => {
    try {
        const result = eval(currentExpression);
        display.value = result.toString();
        currentExpression = result.toString();
        history.push(`${currentExpression} = ${result}`);
        historyDisplay.innerHTML = history.join('<br>'); // Display history
        historyDisplay.style.display = 'block'; 
    } catch (error) {
        display.value = 'Error';
        console.error("Invalid expression");
    }
});
const toggleHistoryDisplayButton = document.getElementById('toggle-history-display') as HTMLButtonElement;
toggleHistoryDisplayButton.addEventListener('click', () => {
  if (historyDisplay.style.display === 'none') {
    historyDisplay.style.display = 'block';
  } else {
    historyDisplay.style.display = 'none';
  }
});

// Clear Last Number (CLN) functionality
const clearLastNumberButton = document.getElementById('clear-last-number') as HTMLButtonElement;
clearLastNumberButton.addEventListener('click', () => {
    const numbers = currentExpression.split(/[^0-9.]/g).filter(Boolean);
    if (numbers.length > 0) {
        const lastNumber = numbers[numbers.length - 1];
        currentExpression = currentExpression.slice(0, currentExpression.lastIndexOf(lastNumber));
        display.value = currentExpression; // Update display
    }
});