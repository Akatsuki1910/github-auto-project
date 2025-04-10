// ... (Existing code)
const calculateSignButton = document.getElementById('calculate-sign') as HTMLButtonElement;
calculateSignButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = Math.sign(value).toString();
    }
});
// ... (Rest of the code)