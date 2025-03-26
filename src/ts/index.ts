// ... (Existing code)
const clearDisplayButton = document.getElementById('clear-display');
if (clearDisplayButton) {
    clearDisplayButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value = '';
    });
}
// ... (Existing code)