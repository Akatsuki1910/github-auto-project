// ... (Existing code)
const calculateTruncButton = document.getElementById('calculate-trunc') as HTMLButtonElement;
calculateTruncButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = Math.trunc(value).toString();
    }
});
// ... (Rest of the code)