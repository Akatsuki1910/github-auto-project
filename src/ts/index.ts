// ... (Existing code)
const calculateNinthPowerButton = document.getElementById('calculate-ninth-power') as HTMLButtonElement;
calculateNinthPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 9).toString();
    }
});
// ... (Rest of the code)