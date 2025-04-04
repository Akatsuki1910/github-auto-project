// ... (Existing code)
const roundToDecimalButton = document.getElementById('round-to-decimal') as HTMLButtonElement;
roundToDecimalButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const x = parseFloat(display.value);
        const decimalPlaces = prompt("Enter the number of decimal places:", "2");
        if (decimalPlaces === null) {
            return;
        }
        const dp = parseInt(decimalPlaces);
        if (isNaN(dp)) {
            display.value = "Invalid decimal places";
            return;
        }
        const result = parseFloat(x.toFixed(dp));
        currentExpressionDisplay.textContent = `round(${x}, ${dp})`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)