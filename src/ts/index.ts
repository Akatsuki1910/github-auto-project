// ... (Existing code)
const calculateInverseButton = document.getElementById('calculate-inverse') as HTMLButtonElement;
calculateInverseButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    }
});
// ... (Rest of the code)