// ... (Existing code)
const calculateOneOverXButton = document.getElementById('calculate-one-over-x') as HTMLButtonElement;
calculateOneOverXButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    }
});