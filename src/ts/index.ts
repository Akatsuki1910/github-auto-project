// ... (Existing code)
const ceilButton = document.getElementById('ceil');
ceilButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const ceilValue = Math.ceil(currentValue);
    display.value = ceilValue.toString();
});
//...(rest of the code)