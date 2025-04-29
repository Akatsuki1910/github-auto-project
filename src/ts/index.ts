// ... (Existing code)
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.log10(currentValue);
        display.value = result.toString();
        currentExpression = result.toString();
        currentExpressionDisplay!.textContent = currentExpression;
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)