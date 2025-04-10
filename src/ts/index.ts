// ... (Existing code)
const calculateFourteenthPowerButton = document.getElementById('calculate-fourteenth-power') as HTMLButtonElement;
calculateFourteenthPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 14).toString();
    }
});
// ... (Rest of the code)