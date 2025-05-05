// ... (Existing code)
const fibonacciButton = document.getElementById('fibonacci') as HTMLButtonElement;
fibonacciButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(display.value);
    if (!isNaN(n)) {
        let a = 0, b = 1, temp;
        for (let i = 0; i < n; i++) {
            temp = b;
            b = a + b;
            a = temp;
        }
        display.value = a.toString();
    }
});
// ... (Rest of existing code)