// ... (Existing code)
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