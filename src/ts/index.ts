// ... (Existing code)
const calculateLnButton = document.getElementById('calculate-ln') as HTMLButtonElement;
calculateLnButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.log(currentValue).toString();
    }
});