// ... (Existing code)
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    display.value = '0';
});
const toggleVisibilityButton = document.getElementById('toggle-visibility');
toggleVisibilityButton.addEventListener('click', () => {
    const calculator = document.getElementById('calculator');
    if (calculator.style.display === 'none') {
        calculator.style.display = 'grid';
    }
    else {
        calculator.style.display = 'none';
    }
});
const toggleColorSchemeButton = document.getElementById('toggle-color-scheme');
toggleColorSchemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const fibonacciButton = document.getElementById('fibonacci');
fibonacciButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    const n = parseInt(display.value);
    if (!isNaN(n)) {
        display.value = fibonacci(n).toString();
    }
});
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const currentTimeButton = document.getElementById('current-time');
currentTimeButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    display.value = timeString;
});