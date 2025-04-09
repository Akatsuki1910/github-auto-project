// ... (Existing code)
const calculatePowerOfTwoButton = document.getElementById('calculate-power-of-two') as HTMLButtonElement;
calculatePowerOfTwoButton.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    if (valueString) {
        const value = Number(valueString);
        const powerOfTwo = Math.pow(2, value);
        display.value = powerOfTwo.toString();
    }
});
// ... (Rest of the code)