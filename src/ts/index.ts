// ... (Existing code)
const calculateTwoPowerXButton = document.getElementById('calculate-two-power-x') as HTMLButtonElement;
calculateTwoPowerXButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.pow(2, currentValue).toString();
    }
});