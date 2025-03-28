// ... (Existing code)
const halfButton = document.getElementById('half');
halfButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const halvedValue = currentValue * 0.5;
    display.value = halvedValue.toString();
});
//...(rest of the code)