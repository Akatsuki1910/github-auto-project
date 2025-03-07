// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
// ... other functions
// Inverse
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        const result = 1 / currentValue;
        display.value = result.toString();
        currentExpressionDisplay.textContent = `1/${currentValue} = ${result}`;
    }
});
// Basic Calculator Functions
// ... (rest of the code)