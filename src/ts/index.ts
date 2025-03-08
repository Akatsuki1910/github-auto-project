// ... (Existing code)
//Added Feature: Hyperbolic Tangent function
const tanhButton = document.getElementById('tanh') as HTMLButtonElement;
tanhButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.tanh(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `tanh(${currentValue}) = ${result}`;
    }
});