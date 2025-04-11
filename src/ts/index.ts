// ... (Existing code)
const calculateSixteenthPowerButton = document.getElementById('calculate-sixteenth-power') as HTMLButtonElement;
calculateSixteenthPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 16).toString();
    }
});
// ... (Rest of the code)