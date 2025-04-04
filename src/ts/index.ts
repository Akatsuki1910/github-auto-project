// ... (Existing code)
const acoshButton = document.getElementById('acosh') as HTMLButtonElement;
acoshButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const x = parseFloat(display.value);
        const result = Math.acosh(x);
        currentExpressionDisplay.textContent = `acosh(${x})`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)