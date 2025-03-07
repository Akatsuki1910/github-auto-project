// ... (Existing code)
//Added Feature: Hyperbolic Cosine function
const coshButton = document.getElementById('cosh') as HTMLButtonElement;
coshButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.cosh(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `cosh(${currentValue}) = ${result}`;
    }
});