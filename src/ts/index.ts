// ... (Existing code)
const calculateTenToThePowerOfXButton = document.getElementById('calculate-ten-to-the-power-of-x') as HTMLButtonElement;
calculateTenToThePowerOfXButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.pow(10, currentValue).toString();
    }
});
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