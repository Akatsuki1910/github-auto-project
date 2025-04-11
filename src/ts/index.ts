// ... (Existing code)
const calculateAbsButton = document.getElementById('calculate-abs') as HTMLButtonElement;
calculateAbsButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.abs(currentValue).toString();
    }
});