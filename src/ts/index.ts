// ... (Existing code)
const tanhButton = document.getElementById('tanh') as HTMLButtonElement;
tanhButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const x = parseFloat(display.value);
        const result = Math.tanh(x);
        currentExpressionDisplay.textContent = `tanh(${x})`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)