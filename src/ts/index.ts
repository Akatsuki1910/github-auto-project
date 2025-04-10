// ... (Existing code)
const calculateLogarithmBase10Button = document.getElementById('calculate-logarithm-base-10') as HTMLButtonElement;
calculateLogarithmBase10Button.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else if (value <= 0) {
        display.value = 'Error: Input must be positive';
    }
    else {
        display.value = Math.log10(value).toString();
    }
});
// ... (Rest of the code)