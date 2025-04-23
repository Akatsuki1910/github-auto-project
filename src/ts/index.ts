// ... (Existing code)
const modButton = document.getElementById('mod');
modButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        currentOperator = '%';
        firstOperand = Number(currentValue);
        currentExpressionDisplay.textContent = `${firstOperand} % `;
        display.value = '';
    }
});