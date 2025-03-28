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
const doubleButton = document.getElementById('double-display');
doubleButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid Input';
    }
    const doubledValue = currentValue * 2;
    display.value = doubledValue.toString();
});
const tripleButton = document.getElementById('triple-display');
tripleButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid Input';
        return;
    }
    const tripledValue = currentValue * 3;
    display.value = tripledValue.toString();
});
//...(rest of the code)