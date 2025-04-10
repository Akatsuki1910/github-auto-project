// ... (Existing code)
const calculateCbrtButton = document.getElementById('calculate-cbrt') as HTMLButtonElement;
calculateCbrtButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = math.cbrt(value).toString();
    }
});
// ... (Rest of the code)