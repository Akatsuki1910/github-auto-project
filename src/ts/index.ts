// ... (Existing code)
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    }
});
const percentageButton = document.getElementById('percentage') as HTMLButtonElement;
percentageButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
    }
});
const tenToThePowerOfXButton = document.getElementById('ten-to-the-power-of-x') as HTMLButtonElement;
tenToThePowerOfXButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(10, currentValue).toString();
    }
});
const cubeRootButton = document.getElementById('cube-root') as HTMLButtonElement;
cubeRootButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.cbrt(currentValue).toString();
    }
});