// ... (Existing code)
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton?.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const toggleHistoryButton = document.getElementById('toggle-history');
const historyDiv = document.getElementById('history-display');
const clearHistoryButton = document.getElementById('clear-history');
// Ensure historyDiv exists before adding event listener
if (historyDiv) {
    historyDiv.style.display = 'none'; // Initially hidden
    toggleHistoryButton?.addEventListener('click', () => {
        if (historyDiv) {
            historyDiv.style.display = historyDiv.style.display === 'none' ? 'block' : 'none';
        }
    });
}
clearHistoryButton?.addEventListener('click', () => {
    historyDiv.innerHTML = '';
});