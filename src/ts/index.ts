// ... (Existing code)
const absButton = document.getElementById('abs');
absButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const absValue = Math.abs(currentValue);
    display.value = absValue.toString();
});
//...(rest of the code)