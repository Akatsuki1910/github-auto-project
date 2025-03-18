// ... (Existing code)
const tenPowerButton = document.getElementById('ten-power') as HTMLButtonElement;
tenPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = Math.pow(10, currentValue).toString();
});