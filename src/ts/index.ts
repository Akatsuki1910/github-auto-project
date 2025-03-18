// ... (Existing code)
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    if (currentValue <= 0) {
        display.value = 'Log not defined for non-positive numbers';
        return;
    }
    display.value = Math.log10(currentValue).toString();
});