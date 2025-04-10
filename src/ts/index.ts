// ... (Existing code)
const calculateLnButton = document.getElementById('calculate-ln') as HTMLButtonElement;
calculateLnButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value) || value <= 0) {
        display.value = 'Error';
    }
    else {
        display.value = Math.log(value).toString();
    }
});
// ... (Rest of the code)