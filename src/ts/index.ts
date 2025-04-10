// ... (Existing code)
const calculateThirteenthPowerButton = document.getElementById('calculate-thirteenth-power') as HTMLButtonElement;
calculateThirteenthPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 13).toString();
    }
});
// ... (Rest of the code)