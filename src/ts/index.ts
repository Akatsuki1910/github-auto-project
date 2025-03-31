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
const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
currentDateButton.addEventListener('click', () => {
    const currentDate = new Date().toLocaleDateString();
    display.value = currentDate;
});
// ... (Rest of the code)