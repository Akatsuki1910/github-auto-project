// ... (Existing code)
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        if (currentExpression) {
            const result = math.mod(parseFloat(currentExpression), currentValue);
            display.value = result.toString();
            currentExpression = result.toString();
            currentExpressionDisplay!.textContent = currentExpression;
        }
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)