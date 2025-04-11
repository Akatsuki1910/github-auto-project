// ... (Existing code)
const calculateCbrtButton = document.getElementById('calculate-cbrt') as HTMLButtonElement;
calculateCbrtButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.cbrt(currentValue).toString();
    }
});