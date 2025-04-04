// ... (Existing code)
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const currentValue = parseFloat(display.value);
        currentExpressionDisplay.textContent = `1/(${currentValue})`;
        const inverseResult = 1 / currentValue;
        display.value = inverseResult.toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)