// ... (Existing code)
const roundNearestButton = document.getElementById('round-nearest');
roundNearestButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const roundedValue = Math.round(currentValue);
    display.value = roundedValue.toString();
});
//...(rest of the code)