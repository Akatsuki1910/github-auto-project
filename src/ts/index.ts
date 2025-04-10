// ... (Existing code)
const calculateTenToThePowerOfXButton = document.getElementById('calculate-ten-to-the-power-of-x') as HTMLButtonElement;
calculateTenToThePowerOfXButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = math.pow(10, value).toString();
    }
});
// ... (Rest of the code)