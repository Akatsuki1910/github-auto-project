// ... (Existing code)
const calculatePercentOfButton = document.getElementById('calculate-percent-of') as HTMLButtonElement;
calculatePercentOfButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
    }
});