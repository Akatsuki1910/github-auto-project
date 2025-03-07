// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
// ... other functions
// Inverse
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        const result = 1 / currentValue;
        display.value = result.toString();
        currentExpressionDisplay.textContent = `1/${currentValue} = ${result}`;
    }
});
//Cube
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = currentValue * currentValue * currentValue;
        display.value = result.toString();
        currentExpressionDisplay.textContent = `${currentValue}³ = ${result}`;
    }
});
//exp
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.exp(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `exp(${currentValue}) = ${result}`;
    }
});
//10^x
const tenPowerButton = document.getElementById('tenPower') as HTMLButtonElement;
tenPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.pow(10, currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `10^${currentValue} = ${result}`;
    }
});
// Basic Calculator Functions
// ... (rest of the code)