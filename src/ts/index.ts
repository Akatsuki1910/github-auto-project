// ... (Existing code)
const powerButton = document.getElementById('power');
powerButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        currentOperator = '^';
        firstOperand = Number(currentValue);
        currentExpressionDisplay.textContent = `${firstOperand} ^ `;
        display.value = '';
    }
});