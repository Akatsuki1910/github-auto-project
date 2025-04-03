// ... (Existing code)
const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
expm1Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const x = parseFloat(display.value);
        const result = Math.expm1(x);
        currentExpressionDisplay.textContent = `expm1(${x})`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)