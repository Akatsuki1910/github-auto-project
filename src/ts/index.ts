// ... (Existing code)
const reciprocalButton = document.getElementById('reciprocal') as HTMLButtonElement;
reciprocalButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    if (currentValue === 0) {
        display.value = 'Division by zero';
        return;
    }
    display.value = (1 / currentValue).toString();
});