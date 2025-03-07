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
//Added cbrt functionality
const cbrtButton = document.getElementById('cbrt') as HTMLButtonElement;
cbrtButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.cbrt(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = display.value;
    }
});
//Added random number functionality
const randomButton = document.getElementById('random') as HTMLButtonElement;
randomButton.addEventListener('click', () => {
    const result = Math.random();
    display.value = result.toString();
    currentExpressionDisplay.textContent = display.value;
});
//Added sign functionality
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.sign(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = display.value;
    }
});
//Added truncate functionality
const truncateButton = document.getElementById('truncate') as HTMLButtonElement;
truncateButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.trunc(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = display.value;
    }
});
// ... (Rest of the existing code)