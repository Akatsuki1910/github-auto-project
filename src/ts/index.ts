// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
// ... other functions
// Inverse
// ... (Other functions)
// Absolute Value
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.abs(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `|${currentValue}| = ${result}`;
    }
});
// Basic Calculator Functions
// ... (rest of the code)