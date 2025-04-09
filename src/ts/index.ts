// ... (Existing code)
const calculatePowerOfSixButton = document.getElementById('calculate-power-of-six') as HTMLButtonElement;
calculatePowerOfSixButton.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    if (valueString) {
        const value = Number(valueString);
        const powerOfSix = Math.pow(6, value);
        display.value = powerOfSix.toString();
    }
});
// ... (Rest of the code)