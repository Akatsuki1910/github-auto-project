// ... (Existing code)
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.pow(currentValue, 3);
        display.value = result.toString();
        currentExpression = result.toString();
        currentExpressionDisplay!.textContent = currentExpression;
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)