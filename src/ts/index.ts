// ... (Existing code)
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const inputValue = display.value;
        if (inputValue) {
            currentExpressionDisplay.textContent = `${inputValue}^`;
            display.value += '^';
        }
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)