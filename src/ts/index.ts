// ... (Existing code)
const calculatePowerOfTwoButton = document.getElementById('calculate-power-of-two') as HTMLButtonElement;
calculatePowerOfTwoButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.pow(2, currentValue).toString();
    }
});
const calculateEButton = document.getElementById('calculate-e') as HTMLButtonElement;
calculateEButton.addEventListener('click', () => {
    display.value = math.e.toString();
});
const calculateRandomButton = document.getElementById('calculate-random') as HTMLButtonElement;
calculateRandomButton.addEventListener('click', () => {
    display.value = math.random().toString();
});