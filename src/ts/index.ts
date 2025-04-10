// ... (Existing code)
const calculateExpButton = document.getElementById('calculate-exp') as HTMLButtonElement;
calculateExpButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = Math.exp(value).toString();
    }
});
// ... (Rest of the code)