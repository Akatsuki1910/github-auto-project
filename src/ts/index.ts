// ... (Existing code)
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;

clearHistoryButton.addEventListener('click', () => {
    historyDisplay.innerHTML = '';
    localStorage.removeItem('calculatorHistory');
});

// ... (Rest of existing code)