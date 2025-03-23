// ... (Existing code)
const modButton = document.getElementById('mod');
modButton.addEventListener('click', () => {
    if (display.value) {
        currentOperator = '%';
        currentExpressionDisplay.textContent = display.value + '%';
        firstOperand = parseFloat(display.value);
        display.value = '';
    }
});
//operator
const equalsButton = document.getElementById('equals');
equalsButton?.addEventListener('click', () => {
    const secondOperand = parseFloat(display.value);
    let result;
    switch (currentOperator) {
        case '+':
            result = math.add(firstOperand, secondOperand);
            break;
        case '-':
            result = math.subtract(firstOperand, secondOperand);
            break;
        case '*':
            result = math.multiply(firstOperand, secondOperand);
            break;
        case '/':
            result = math.divide(firstOperand, secondOperand);
            break;
        case '%':
            result = math.mod(firstOperand, secondOperand);
            break;
        default:
            return;
    }
    display.value = result.toString();
    currentExpressionDisplay.textContent = '';
    currentOperator = '';
});
// ... (rest of the code)