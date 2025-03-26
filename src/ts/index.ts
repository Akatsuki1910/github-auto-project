// ... (Existing code)
const factorialButton = document.getElementById('factorial');
if (factorialButton) {
    factorialButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const n = parseInt(display.value);
        if (isNaN(n) || n < 0) {
            display.value = 'Error';
            return;
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        display.value = result.toString();
    });
}
// ... (Existing code)