// ... (Existing code)
const toggleHistoryButton = document.getElementById('toggle-history');
const historyDiv = document.createElement('div');
historyDiv.id = 'history-display';
historyDiv.style.display = 'none'; // Initially hidden
document.body.appendChild(historyDiv);
toggleHistoryButton?.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display');
    if (historyDisplay) {
        historyDisplay.style.display = historyDisplay.style.display === 'none' ? 'block' : 'none';
    }
});