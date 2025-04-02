// ... (Existing code)
const reciprocalButton = document.getElementById('inverse') as HTMLButtonElement;
reciprocalButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue) || currentValue === 0) {
        display.value = 'Error: Invalid input';
        return;
    }
    display.value = (1 / currentValue).toString();
});
// ... (Rest of the code)