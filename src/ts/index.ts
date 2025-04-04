// ... (Existing code)
const hypotButton = document.getElementById('hypot') as HTMLButtonElement;
hypotButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const currentValue = parseFloat(display.value);
        // Hypot requires at least two arguments. For simplicity, we'll use the current value and a fixed value (e.g., 3).
        const result = Math.hypot(currentValue, 3);
        currentExpressionDisplay.textContent = `hypot(${currentValue}, 3)`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)