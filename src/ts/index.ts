// ... (Existing code)
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton?.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const halfButton = document.getElementById('half');
halfButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const halvedValue = currentValue * 0.5;
    display.value = halvedValue.toString();
});
//...(rest of the code)