// ... (Existing code)
const halfButton = document.getElementById('half') as HTMLButtonElement;
halfButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const x = parseFloat(display.value);
        const result = x / 2;
        currentExpressionDisplay.textContent = `${x} / 2`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)