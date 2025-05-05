// ... (Existing code)
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
factorialButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(display.value);
    if (!isNaN(n)) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        display.value = result.toString();
    }
});
// ... (Rest of existing code)