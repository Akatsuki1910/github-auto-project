// ... (Existing code)
const clearHistoryButton = document.getElementById('clear-history');
let history = [];
clearHistoryButton.addEventListener('click', () => {
    history = [];
    // Implement logic to visually clear history if displayed
});
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const openNewTabButton = document.getElementById('open-new-tab');
openNewTabButton.addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
});
