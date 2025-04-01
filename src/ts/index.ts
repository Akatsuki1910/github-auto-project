// ... (Existing code)
const avgButton = document.getElementById('avg') as HTMLButtonElement;
avgButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = sum / numbers.length;
    display.value = avg.toString();
});
const sumButton = document.getElementById('sum') as HTMLButtonElement;
sumButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);
    const sum = numbers.reduce((a, b) => a + b, 0);
    display.value = sum.toString();
});
const fibButton = document.getElementById('fib') as HTMLButtonElement;
fibButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    let n = parseInt(display.value);
    if (isNaN(n)) {
        n = 1; // Default Fibonacci number
    }
    display.value = fibonacci(n).toString();
});
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// ... (Rest of the code)