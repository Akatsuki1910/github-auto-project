// ... (Existing code)
const calculateFifteenthPowerButton = document.getElementById('calculate-fifteenth-power') as HTMLButtonElement;
calculateFifteenthPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 15).toString();
    }
});
// ... (Rest of the code)