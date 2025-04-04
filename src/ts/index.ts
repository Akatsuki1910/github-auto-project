// ... (Existing code)
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const currentValue = parseFloat(display.value);
        currentExpressionDisplay.textContent = `abs(${currentValue})`;
        const absResult = Math.abs(currentValue);
        display.value = absResult.toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)