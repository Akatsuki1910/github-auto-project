// ... (Existing code)
const oneOverXButton = document.getElementById('one-over-x');
oneOverXButton?.addEventListener('click', () => {
    const input = display.value;
    if (input === '0') {
        display.value = 'Error: Division by zero';
    } else {
        display.value = (1 / Number(input)).toString();
    }
});
// ... (Rest of existing code)