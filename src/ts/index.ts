// ... (Existing code)
const calculateCeilButton = document.getElementById('calculate-ceil') as HTMLButtonElement;
calculateCeilButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = Math.ceil(value).toString();
    }
});
// ... (Rest of the code)