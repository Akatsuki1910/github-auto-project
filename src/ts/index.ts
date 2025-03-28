// ... (Existing code)
const doubleButton = document.getElementById('double');
doubleButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const doubledValue = currentValue * 2;
    display.value = doubledValue.toString();
});
//...(rest of the code)