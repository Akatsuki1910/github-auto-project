// ... (Existing code)
const calculatePowerOfThreeButton = document.getElementById('calculate-power-of-three') as HTMLButtonElement;
calculatePowerOfThreeButton.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    if (valueString) {
        const value = Number(valueString);
        const powerOfThree = Math.pow(3, value);
        display.value = powerOfThree.toString();
    }
});
// ... (Rest of the code)