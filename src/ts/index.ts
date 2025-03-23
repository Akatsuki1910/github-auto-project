// ... (Existing code)
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const currentDateTime = document.getElementById('current-date-time');
setInterval(() => {
    const now = new Date();
    currentDateTime.textContent = now.toLocaleString();
}, 1000);
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
// ... (Rest of the existing code)