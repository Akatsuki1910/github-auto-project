// ... (Existing code)
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const inputValue = display.value;
        if (inputValue) {
            currentExpressionDisplay.textContent = `log(${inputValue})`;
            const result = math.log10(Number(inputValue));
            display.value = result.toString();
        }
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)