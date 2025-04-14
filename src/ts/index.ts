// ... (Existing code)
const squaredRootButton = document.getElementById('squared-root') as HTMLButtonElement;
squaredRootButton.addEventListener('click', () => {
    // Placeholder for squared root logic
    const currentValue = parseFloat(display.value);
    currentExpressionDisplay.textContent = `${currentValue}√`;
    waitingForSecondOperand = true;
    pendingOperator = 'squaredRoot';
});

const evaluate = () => {
    const secondOperand = parseFloat(display.value);
    if (pendingOperator && !isNaN(secondOperand)) {
        switch (pendingOperator) {
            // ... other cases
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
