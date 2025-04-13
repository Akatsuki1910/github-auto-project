// ... (Existing code)
const calculateFifthPowerButton = document.getElementById('calculate-fifth-power') as HTMLButtonElement;
calculateFifthPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue * currentValue * currentValue * currentValue).toString();
    }
});