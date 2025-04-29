// ... (Existing code)
const tanButton = document.getElementById('tan') as HTMLButtonElement;
tanButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.tan(currentValue);
        display.value = result.toString();
        currentExpression = result.toString();
        currentExpressionDisplay!.textContent = currentExpression;
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)