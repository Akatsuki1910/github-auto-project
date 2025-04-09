// ... (Existing code)
const calculatePowerOfNineButton = document.getElementById('calculate-power-of-nine') as HTMLButtonElement;
calculatePowerOfNineButton.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    if (valueString) {
        const value = Number(valueString);
        const powerOfNine = Math.pow(9, value);
        display.value = powerOfNine.toString();
    }
});
// ... (Rest of the code)