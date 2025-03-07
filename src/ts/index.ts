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
// Added Feature: Arcsine function
const asinButton = document.getElementById('asin') as HTMLButtonElement;
asinButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.asin(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `asin(${currentValue}) = ${result}`;
    }
});
// Added Feature: Arctangent function
const atanButton = document.getElementById('atan') as HTMLButtonElement;
atanButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.atan(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `atan(${currentValue}) = ${result}`;
    }
});
// Added Feature: Hyperbolic Arccosine function
const acoshButton = document.getElementById('acosh') as HTMLButtonElement;
acoshButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >= 1) {
        const result = Math.acosh(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `acosh(${currentValue}) = ${result}`;
    } else {
      display.value = "Error: Input must be >= 1";
      currentExpressionDisplay.textContent = "";
    }
});