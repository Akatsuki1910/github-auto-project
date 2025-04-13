// ... (Existing code)
const calculatePercentageChangeButton = document.getElementById('calculate-percent-change') as HTMLButtonElement;
let previousValue = 0;
calculatePercentageChangeButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && previousValue !== 0) {
        const percentageChange = ((currentValue - previousValue) / previousValue) * 100;
        display.value = percentageChange.toString();
    }
    previousValue = currentValue;
});