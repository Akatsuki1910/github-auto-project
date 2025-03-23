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
// ... (Other existing event listeners)
const logButton = document.getElementById('log');
logButton.addEventListener('click', () => {
    if (display.value) {
        display.value = math.log10(parseFloat(display.value)).toString();
    }
});
const absButton = document.getElementById('abs');
absButton.addEventListener('click', () => {
    if (display.value) {
        display.value = math.abs(parseFloat(display.value)).toString();
    }
});