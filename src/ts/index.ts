// ... (Existing code)
const ceilButton = document.getElementById('ceil') as HTMLButtonElement;
ceilButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.ceil(currentValue).toString();
    }
    else {
        display.value = 'Invalid Input';
    }
});
// ... (Rest of existing code)