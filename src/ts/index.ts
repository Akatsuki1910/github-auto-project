// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
// ... other functions
// Floor
// ... (Other functions)
// Cube Root
const cbrtButton = document.getElementById('cbrt') as HTMLButtonElement;
cbrtButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.cbrt(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `cbrt(${currentValue}) = ${result}`;
    }
});
//Clear Entry
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
clearEntryButton.addEventListener('click', () => {
    display.value = '';
});
// Basic Calculator Functions
// ... (rest of the code)