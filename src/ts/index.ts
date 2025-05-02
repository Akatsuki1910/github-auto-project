// ... (Existing code)
const oneOverXButton = document.getElementById('oneOverX') as HTMLButtonElement;
oneOverXButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    } else if (currentValue === 0) {
        display.value = 'Cannot divide by zero';
    } else {
        display.value = 'Invalid Input';
    }
});
// ... (Rest of existing code)