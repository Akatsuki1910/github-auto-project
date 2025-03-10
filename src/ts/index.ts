// ... (Existing code)
const resetButton = document.getElementById('reset') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
    display.value = '0';
    currentExpression = '';
    currentExpressionDisplay.textContent = '';
});
// ... (rest of the code)