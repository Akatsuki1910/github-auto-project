// ... (Existing code)
const log1pButton = document.getElementById('log1p') as HTMLButtonElement;
log1pButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const x = parseFloat(display.value);
        const result = Math.log1p(x);
        currentExpressionDisplay.textContent = `log1p(${x})`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)