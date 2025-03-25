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
const currentDateButton = document.getElementById('current-date');
currentDateButton.addEventListener('click', () => {
    const currentDate = new Date().toLocaleDateString();
    const display = document.getElementById('display');
    display.value = currentDate;
});
const exitButton = document.getElementById('exit');
exitButton.addEventListener('click', () => {
    window.close();
});
const changeFontSizeButton = document.getElementById('change-font-size');
let fontSize = 16;
changeFontSizeButton.addEventListener('click', () => {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
});
