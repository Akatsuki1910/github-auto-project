// ... (Existing code)
const deleteLastCharButton = document.getElementById('delete-last-char') as HTMLButtonElement;
deleteLastCharButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
    history = [];
    historyDisplay.innerHTML = '';
});
// ... (Rest of the code)