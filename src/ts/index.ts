// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 

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