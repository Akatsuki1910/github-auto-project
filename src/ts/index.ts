// ... (Existing code)
//Added expm1 functionality
const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
expm1Button.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.expm1(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = display.value;
    }
});
//Added floor functionality
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.floor(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = display.value;
    }
});
// ... (Rest of the existing code)