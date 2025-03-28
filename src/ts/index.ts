// ... (Existing code)
const tripleButton = document.getElementById('triple');
tripleButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const tripledValue = currentValue * 3;
    display.value = tripledValue.toString();
});
//...(rest of the code)