// ... (Existing code)
const powerButton = document.getElementById('power');
powerButton.addEventListener('click', () => {
    if (display.value) {
        currentOperator = '^';
        currentExpressionDisplay.textContent = display.value + '^';
        firstOperand = parseFloat(display.value);
        display.value = '';
    }
});
const equalsButton = document.getElementById('equals');
equalsButton?.addEventListener('click', () => {
    const secondOperand = parseFloat(display.value);
    let result;
    switch (currentOperator) {
        // ... (Existing cases)
        case '^':
            result = math.pow(firstOperand, secondOperand);
            break;
        default:
            return;
    }
    display.value = result.toString();
    currentExpressionDisplay.textContent = '';
    currentOperator = '';
});
// ... (rest of the code)