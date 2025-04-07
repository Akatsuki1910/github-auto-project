// ... (Existing code)
const absoluteButton = document.getElementById('absolute') as HTMLButtonElement;
absoluteButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const inputValue = display.value;
        if (inputValue) {
            currentExpressionDisplay.textContent = `abs(${inputValue})`;
            const result = math.abs(Number(inputValue));
            display.value = result.toString();
        }
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)