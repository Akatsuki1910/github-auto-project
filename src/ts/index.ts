// ... (Existing code)
const calculateAbsoluteButton = document.getElementById('calculate-absolute') as HTMLButtonElement;
calculateAbsoluteButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = Math.abs(value).toString();
    }
});
// ... (Rest of the code)