// ... (Existing code)
// ...
// Cosine function (unchanged)
// ...
//Added Feature: Tangent function
const tanButton = document.getElementById('tan') as HTMLButtonElement;
tanButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.tan(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `tan(${currentValue}) = ${result}`;
    }
});