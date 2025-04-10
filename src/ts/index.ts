// ... (Existing code)
const calculatePercentButton = document.getElementById('calculate-percent') as HTMLButtonElement;
calculatePercentButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = (value / 100).toString();
    }
});
// ... (Rest of the code)