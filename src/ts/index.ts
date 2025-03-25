// ... (Existing code)
const clearEntryButton = document.getElementById('clear-entry');
if (clearEntryButton) {
    clearEntryButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value = '';
    });
}
const doubleButton = document.getElementById('double');
if (doubleButton) {
    doubleButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = (currentValue * 2).toString();
        }
    });
}
// ... (Existing code)