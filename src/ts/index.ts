// ... (Existing code)
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = Math.floor(currentValue).toString();
});