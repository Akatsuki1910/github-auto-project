// ... (Existing code)
const calculateFibonacciButton = document.getElementById('calculate-fibonacci') as HTMLButtonElement;
calculateFibonacciButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(prompt('Enter the number of terms:') || '0');
    if (isNaN(n) || n < 0) {
        display.value = 'Error';
        return;
    }
    let a = 0, b = 1, nextTerm;
    let result = '';
    for (let i = 1; i <= n; ++i) {
        result += a + ' ';
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    display.value = result.trim();
});
// ... (Rest of the code)