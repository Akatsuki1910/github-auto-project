// ... (Existing code)
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.exp(currentValue).toString();
    }
    else {
        display.value = 'Invalid Input';
    }
});
// ... (Rest of existing code)