// ... (Existing code)
const calculatePowerOfEightButton = document.getElementById('calculate-power-of-eight') as HTMLButtonElement;
calculatePowerOfEightButton.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    if (valueString) {
        const value = Number(valueString);
        const powerOfEight = Math.pow(8, value);
        display.value = powerOfEight.toString();
    }
});
// ... (Rest of the code)