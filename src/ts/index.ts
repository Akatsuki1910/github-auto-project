// ... (Existing code)
const calculatePowerOfFourButton = document.getElementById('calculate-power-of-four') as HTMLButtonElement;
calculatePowerOfFourButton.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    if (valueString) {
        const value = Number(valueString);
        const powerOfFour = Math.pow(4, value);
        display.value = powerOfFour.toString();
    }
});
// ... (Rest of the code)