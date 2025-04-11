// ... (Existing code)
const calculateSignButton = document.getElementById('calculate-sign') as HTMLButtonElement;
calculateSignButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.sign(currentValue).toString();
    }
});