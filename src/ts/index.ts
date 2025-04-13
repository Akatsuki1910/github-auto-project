// ... (Existing code)
const calculateSixthPowerButton = document.getElementById('calculate-sixth-power') as HTMLButtonElement;
calculateSixthPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 6).toString();
    }
});