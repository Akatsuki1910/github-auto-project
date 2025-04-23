// ... (Existing code)
const fibonacciButton = document.getElementById('fibonacci');
fibonacciButton?.addEventListener('click', () => {
    const n = Number(prompt("Enter the nth Fibonacci number you want", "5"));
    if (isNaN(n) || !Number.isInteger(n) || n < 0) {
        display.value = "Invalid input";
        return;
    }
    function fibonacci(n: number): number {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    display.value = fibonacci(n).toString();
});
//rest of code