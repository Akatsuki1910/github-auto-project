// ... (Existing code)
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.exp(currentValue);
        display.value = result.toString();
        currentExpression = result.toString();
        currentExpressionDisplay!.textContent = currentExpression;
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)