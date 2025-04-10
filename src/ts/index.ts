// ... (Existing code)
const calculateLog10Button = document.getElementById('calculate-log10') as HTMLButtonElement;
calculateLog10Button.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = Math.log10(value).toString();
    }
});
// ... (Rest of the code)