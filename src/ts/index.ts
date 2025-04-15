// ... (Existing code)
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        currentOperator = 'mod';
        firstOperand = currentValue;
        display.value = '';
        currentExpressionDisplay.textContent = `${firstOperand} mod `;    }
});