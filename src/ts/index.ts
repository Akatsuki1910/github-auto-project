// ... (Existing code)
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