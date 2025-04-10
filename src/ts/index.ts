// ... (Existing code)
const calculatePowerOfTenButton = document.getElementById('calculate-power-of-ten') as HTMLButtonElement;
calculatePowerOfTenButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = Math.pow(10, value).toString();
    }
});
// ... (Rest of the code)