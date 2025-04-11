// ... (Existing code)
const calculateLog1pButton = document.getElementById('calculate-log1p') as HTMLButtonElement;
calculateLog1pButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.log1p(currentValue).toString();
    }
});