// ... (Existing code)
const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.round(currentValue).toString();
    }
    else {
        display.value = 'Invalid Input';
    }
});
// ... (Rest of existing code)