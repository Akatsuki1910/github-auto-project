// ... (Existing code)
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const divisor = parseFloat(prompt('Enter the divisor:') || '1');
    if (isNaN(divisor)) {
        display.value = 'Invalid divisor';
        return;
    }
    display.value = (currentValue % divisor).toString();
});