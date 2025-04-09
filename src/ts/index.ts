// ... (Existing code)
const calculateTenPowerButton = document.getElementById('calculate-ten-power') as HTMLButtonElement;
calculateTenPowerButton.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    if (valueString) {
        const value = Number(valueString);
        const tenPower = Math.pow(10, value);
        display.value = tenPower.toString();
    }
});
// ... (Rest of the code)