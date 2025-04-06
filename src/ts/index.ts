// ... (Existing code)
const naturalLogButton = document.getElementById('natural-log') as HTMLButtonElement;
naturalLogButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const inputValue = display.value;
        if (inputValue) {
            currentExpressionDisplay.textContent = `ln(${inputValue})`;
            const result = math.log(Number(inputValue));
            display.value = result.toString();
        }
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)