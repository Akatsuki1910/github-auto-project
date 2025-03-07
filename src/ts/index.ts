// ... (Existing code)
//Added Feature: Hyperbolic Sine function
const sinhButton = document.getElementById('sinh') as HTMLButtonElement;
sinhButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.sinh(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `sinh(${currentValue}) = ${result}`;
    }
});