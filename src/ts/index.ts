// ... (Existing code)
const calculateFifthPowerButton = document.getElementById('calculate-fifth-power') as HTMLButtonElement;
calculateFifthPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 5).toString();
    }
});
// ... (Rest of the code)