// ... (Existing code)
const clearEntryButton = document.getElementById('clear-entry');
if (clearEntryButton) {
    clearEntryButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value = '';
    });
}
// ... (Existing code)