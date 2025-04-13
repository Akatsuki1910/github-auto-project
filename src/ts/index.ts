// ... (Existing code)
const calculateTenToThePowerButton = document.getElementById('calculate-ten-to-the-power') as HTMLButtonElement;
calculateTenToThePowerButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter the value for exponent (base 10):') || '0');
    if (isNaN(value)) {
        alert('Invalid input for exponent.');
        return;
    }
    display.value = Math.pow(10,value).toString();
});