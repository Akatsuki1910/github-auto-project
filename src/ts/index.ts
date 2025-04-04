// ... (Existing code)
const exp2Button = document.getElementById('exp2') as HTMLButtonElement;
exp2Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.pow(2, currentValue);
        currentExpressionDisplay.textContent = `2^(${currentValue})`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)