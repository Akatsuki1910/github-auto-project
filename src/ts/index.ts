// ... (Existing code)
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
nthRootButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    currentExpressionDisplay.textContent = `y√${currentValue}`;
    waitingForSecondOperand = true;
    pendingOperator = 'nthRoot';
    secondOperand = currentValue; // Store currentValue as secondOperand
});

const evaluate = () => {
    const firstOperand_nth = parseFloat(display.value); //Renamed to avoid conflict
    if (pendingOperator && !isNaN(firstOperand_nth)) {
        switch (pendingOperator) {
            // ... other cases
            case 'nthRoot':
                display.value = Math.pow(secondOperand, 1/firstOperand_nth).toString();
                break;
        }
        currentExpressionDisplay.textContent = '';
        pendingOperator = null;
        waitingForSecondOperand = false;
        firstOperand = null;
        secondOperand = null; 
    }
}