// ... (Existing code)
const exponentButton = document.getElementById('exponent') as HTMLButtonElement;
exponentButton.addEventListener('click', () => {
    // Handle exponent operation (x^y)
    display.value += '^';
});
const cuberootButton = document.getElementById('cuberoot') as HTMLButtonElement;
cuberootButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.cbrt(currentValue).toString();
    }
    else {
        display.value = 'Invalid input';
    }
});
const tenPowerButton = document.getElementById('ten-power') as HTMLButtonElement;
tenPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(10, currentValue).toString();
    }
    else {
        display.value = 'Invalid Input';
    }
});
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.log10(currentValue).toString();
    }
    else {
        display.value = 'Invalid Input';
    }
});
// ... (Rest of existing code)