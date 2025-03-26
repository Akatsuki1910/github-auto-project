// ... (Existing code)
const signChangeButton = document.getElementById('sign-change');
if (signChangeButton) {
    signChangeButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        try {
            const currentValue = parseFloat(display.value);
            display.value = (-currentValue).toString();
        } catch (error) {
            display.value = 'Error';
        }
    });
}
const clearHistoryButton = document.getElementById('clear-history');
if (clearHistoryButton) {
    clearHistoryButton.addEventListener('click', () => {
        const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
        if (currentExpressionDisplay) {
            currentExpressionDisplay.textContent = '';
        }
    });
}
// ... (Existing code)