// ... (Existing code)
const atanhButton = document.getElementById('atanh') as HTMLButtonElement;
atanhButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const x = parseFloat(display.value);
        const result = Math.atanh(x);
        currentExpressionDisplay.textContent = `atanh(${x})`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)