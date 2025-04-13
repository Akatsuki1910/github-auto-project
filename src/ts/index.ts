// ... (Existing code)
const calculateTenthPowerButton = document.getElementById('calculate-tenth-power') as HTMLButtonElement;
calculateTenthPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 10).toString();
    }
});