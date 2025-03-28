// ... (Existing code)
const exponentiationButton = document.getElementById('exponentiation');
exponentiationButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const exponentiationValue = Math.exp(currentValue);
    display.value = exponentiationValue.toString();
});
//...(rest of the code)