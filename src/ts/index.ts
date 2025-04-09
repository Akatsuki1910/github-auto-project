// ... (Existing code)
const calculatePowerOfSevenButton = document.getElementById('calculate-power-of-seven') as HTMLButtonElement;
calculatePowerOfSevenButton.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    if (valueString) {
        const value = Number(valueString);
        const powerOfSeven = Math.pow(7, value);
        display.value = powerOfSeven.toString();
    }
});
// ... (Rest of the code)