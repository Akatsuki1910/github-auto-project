// ... (Existing code)
const ln1pButton = document.getElementById('ln1p') as HTMLButtonElement;
ln1pButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.log1p(currentValue);
        currentExpressionDisplay.textContent = `ln1p(${currentValue})`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)