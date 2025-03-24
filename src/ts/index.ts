// ... (Existing code)
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const clearMemoryButton = document.getElementById('clear-memory');
clearMemoryButton.addEventListener('click', () => {
    memoryValue = 0;
});