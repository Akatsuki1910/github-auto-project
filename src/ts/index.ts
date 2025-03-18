// ... (Existing code)
const squareButton = document.getElementById('square') as HTMLButtonElement;
squareButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = Math.pow(currentValue, 3).toString();
});