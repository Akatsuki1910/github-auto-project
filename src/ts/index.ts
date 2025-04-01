// ... (Existing code)
const fibButton = document.getElementById('fib') as HTMLButtonElement;
fibButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    let n = parseInt(display.value);
    if (isNaN(n)) {
        n = 1; // Default Fibonacci number
    }
    display.value = fibonacci(n).toString();
});
function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// ... (Rest of the code)