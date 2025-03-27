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
const toggleSciModeButton = document.getElementById('toggleSciMode');
const calculatorDiv = document.getElementById('calculator');
toggleSciModeButton?.addEventListener('click', () => {
    calculatorDiv?.classList.toggle('scientific-mode');
    const scientificButtons = document.querySelectorAll('.scientific');
    scientificButtons.forEach(button => {
        button.style.display = button.style.display === 'none' ? 'inline-block' : 'none';
    });
});
