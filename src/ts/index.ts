// ... (Existing code)
const truncateButton = document.getElementById('truncate') as HTMLButtonElement;
truncateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const x = parseFloat(display.value);
        const result = Math.trunc(x);
        currentExpressionDisplay.textContent = `trunc(${x})`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)