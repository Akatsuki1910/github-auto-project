// ... (Existing code)
const oneOverXButton = document.getElementById('one-over-x') as HTMLButtonElement;
oneOverXButton?.addEventListener('click', () => {
    const number = parseFloat(display.value);
    if (isNaN(number) || number === 0) {
        display.value = 'Invalid input';
        return;
    }
    display.value = (1 / number).toString();
});
//...(rest of the code)