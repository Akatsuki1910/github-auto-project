// ... (Existing code)
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.abs(currentValue).toString();
    }
    else {
        display.value = 'Invalid Input';
    }
});
// ... (Rest of existing code)