// ... (Existing code)
const calculateRoundButton = document.getElementById('calculate-round') as HTMLButtonElement;
calculateRoundButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = Math.round(value).toString();
    }
});
// ... (Rest of the code)