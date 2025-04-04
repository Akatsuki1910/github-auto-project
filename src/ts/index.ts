// ... (Existing code)
const asinhButton = document.getElementById('asinh') as HTMLButtonElement;
asinhButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const x = parseFloat(display.value);
        const result = Math.asinh(x);
        currentExpressionDisplay.textContent = `asinh(${x})`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)