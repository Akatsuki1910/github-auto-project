// ... (Existing code)
const calculateExpressionButton = document.getElementById('calculate-expression') as HTMLButtonElement;
calculateExpressionButton.addEventListener('click', () => {
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const result = math.evaluate(currentExpressionDisplay.textContent);
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
const clearExpressionButton = document.getElementById('clear-expression') as HTMLButtonElement;
clearExpressionButton.addEventListener('click', () => {
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    currentExpressionDisplay.textContent = '';
});
const oneOverXButton = document.getElementById('one-over-x') as HTMLButtonElement;
oneOverXButton?.addEventListener('click', () => {
    const number = parseFloat(display.value);
    if (isNaN(number) || number === 0) {
        display.value = 'Invalid input';
        return;
    }
    display.value = (1 / number).toString();
});
//...(rest of the code)