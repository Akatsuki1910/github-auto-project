// ... (Existing code)
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const display = document.getElementById('display') as HTMLInputElement;
document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    try {
        const result = math.evaluate(display.value);
        display.value = result.toString();
    }
    catch (error) {
        display.value = 'Error';
    }
});
const backspaceButton = document.getElementById('backspace');
backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    display.value = '';
});
