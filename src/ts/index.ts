// ... (Existing code)
const calculatePowerOfTwoButton = document.getElementById('calculate-power-of-two') as HTMLButtonElement;
calculatePowerOfTwoButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = Math.pow(2, value).toString();
    }
});
// ... (Rest of the code)