// ... (Existing code)
const calculateFactorialButton = document.getElementById('calculate-factorial') as HTMLButtonElement;
calculateFactorialButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(prompt('Enter a non-negative integer:') || '0');
    if (isNaN(n) || n < 0) {
        display.value = 'Error: Invalid input';
        return;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    display.value = result.toString();
});
// ... (Rest of the code)