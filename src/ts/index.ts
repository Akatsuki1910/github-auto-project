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
const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
    display.value = Math.PI.toString();
});
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
factorialButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = math.factorial(currentValue);
        display.value = result.toString();
    }
});