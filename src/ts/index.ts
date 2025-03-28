// ... (Existing code)
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