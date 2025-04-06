// ... (Existing code)
const exp10Button = document.getElementById('exp10') as HTMLButtonElement;
exp10Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const inputValue = display.value;
        if (inputValue) {
            currentExpressionDisplay.textContent = `10^(${inputValue})`;
            const result = math.pow(10, Number(inputValue));
            display.value = result.toString();
        }
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)