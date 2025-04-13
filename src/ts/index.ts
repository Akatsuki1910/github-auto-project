// ... (Existing code)
const calculateEighthPowerButton = document.getElementById('calculate-eighth-power') as HTMLButtonElement;
calculateEighthPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 8).toString();
    }
});