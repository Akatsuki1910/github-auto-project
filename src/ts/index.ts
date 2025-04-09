// ... (Existing code)
const calculatePowerOfFiveButton = document.getElementById('calculate-power-of-five') as HTMLButtonElement;
calculatePowerOfFiveButton.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    if (valueString) {
        const value = Number(valueString);
        const powerOfFive = Math.pow(5, value);
        display.value = powerOfFive.toString();
    }
});
// ... (Rest of the code)