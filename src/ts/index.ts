// ... (Existing code)
const calculateExpm1Button = document.getElementById('calculate-expm1') as HTMLButtonElement;
calculateExpm1Button.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = math.expm1(value).toString();
    }
});
// ... (Rest of the code)