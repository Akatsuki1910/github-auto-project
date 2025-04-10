// ... (Existing code)
const calculateTwelfthPowerButton = document.getElementById('calculate-twelfth-power') as HTMLButtonElement;
calculateTwelfthPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 12).toString();
    }
});
// ... (Rest of the code)