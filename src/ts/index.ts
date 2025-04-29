// ... (Existing code)
const tenToThePowerXButton = document.getElementById('ten-to-the-power-x') as HTMLButtonElement;
tenToThePowerXButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.pow(10, currentValue);
        display.value = result.toString();
        currentExpression = result.toString();
        currentExpressionDisplay!.textContent = currentExpression;
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)