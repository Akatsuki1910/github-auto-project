// ... (Existing code)
const acosButton = document.getElementById('acos') as HTMLButtonElement;
acosButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.acos(currentValue).toString();
    } else {
        display.value = 'Error';
    }
});