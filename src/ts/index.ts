// ... (Existing code)
const toggleThemeButton = document.getElementById('toggle-light-dark') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    const currentValue = display.value;
    if (currentValue) {
        currentExpressionDisplay.textContent = currentValue;
        display.value = currentValue;
    }
});
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    historyDisplay.innerHTML = '';
});
// ... (Rest of the code)