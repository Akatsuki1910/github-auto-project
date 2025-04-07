// ... (Existing code)
const log10Button = document.getElementById('log10') as HTMLButtonElement;
log10Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const inputValue = display.value;
        if (inputValue) {
            const num = Number(inputValue);
            const result = math.log10(num);
            currentExpressionDisplay.textContent = `log₁₀(${inputValue})`;
            display.value = result.toString();
        }
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)