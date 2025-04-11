// ... (Existing code)
const calculateTenPowerXButton = document.getElementById('calculate-ten-power-x') as HTMLButtonElement;
calculateTenPowerXButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.pow(10, currentValue).toString();
    }
});