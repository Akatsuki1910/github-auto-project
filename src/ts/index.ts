// ... (Existing code)
const calculateExpButton = document.getElementById('calculate-exp') as HTMLButtonElement;
calculateExpButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.exp(currentValue).toString();
    }
});