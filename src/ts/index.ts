// ... (Existing code)
const minButton = document.getElementById('min') as HTMLButtonElement;
minButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const currentValue = parseFloat(display.value);
        // Min requires at least two arguments. For simplicity, we'll use the current value and a fixed value (e.g., 5).
        const result = Math.min(currentValue, 5);
        currentExpressionDisplay.textContent = `min(${currentValue}, 5)`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)