// ... (Existing code)
const toFixedButton = document.getElementById('toFixed') as HTMLButtonElement;
toFixedButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = currentValue.toFixed(2);
    }
    else {
        display.value = 'Invalid Input';
    }
});
// ... (Rest of existing code)