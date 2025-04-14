// ... (Existing code)
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    currentExpressionDisplay.textContent = `${currentValue}^`;
    waitingForSecondOperand = true;
    pendingOperator = 'power';
    firstOperand = currentValue;
});

const evaluate = () => {
    const secondOperand = parseFloat(display.value);
    if (pendingOperator && !isNaN(secondOperand)) {
        switch (pendingOperator) {
            // ... other cases
            case 'power':
                display.value = Math.pow(firstOperand, secondOperand).toString();
                break;
            case 'squaredRoot':
                display.value = Math.pow(secondOperand, 1/firstOperand).toString();
                break;                
        }
        currentExpressionDisplay.textContent = '';
        pendingOperator = null;
        waitingForSecondOperand = false;
        firstOperand = null;
    }
}