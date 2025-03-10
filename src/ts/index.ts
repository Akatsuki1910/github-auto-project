// ... (Existing code)
const parenthesesOpenButton = document.getElementById('parentheses-open') as HTMLButtonElement;
parenthesesOpenButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += '(';
});
const parenthesesCloseButton = document.getElementById('parentheses-close') as HTMLButtonElement;
parenthesesCloseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += ')';
});
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
clearEntryButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = '';
});