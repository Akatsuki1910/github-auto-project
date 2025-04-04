// ... (Existing code)
const tenXButton = document.getElementById('ten-x') as HTMLButtonElement;
tenXButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.pow(10, currentValue);
        currentExpressionDisplay.textContent = `10^(${currentValue})`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)