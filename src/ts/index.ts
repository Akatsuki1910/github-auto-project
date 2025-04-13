// ... (Existing code)
const calculatePowerOfTwoButton = document.getElementById('calculate-power-of-two') as HTMLButtonElement;
calculatePowerOfTwoButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(2, currentValue).toString();
    }
});