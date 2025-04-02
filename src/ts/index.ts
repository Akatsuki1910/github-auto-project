// ... (Existing code)
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    const currentValue = display.value;
    if (currentValue) {
        currentExpressionDisplay.textContent = currentValue;
        display.value = currentValue;
    }
});
// ... (Rest of the code)