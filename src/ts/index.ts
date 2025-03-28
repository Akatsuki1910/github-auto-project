// ... (Existing code)
const percentButton = document.getElementById('percent');
percentButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const percentValue = currentValue / 100;
    display.value = percentValue.toString();
});
//...(rest of the code)