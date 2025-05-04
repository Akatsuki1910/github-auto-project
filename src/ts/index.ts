// ... (Existing code)
const isPrimeButton = document.getElementById('isPrime') as HTMLButtonElement;

isPrimeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const num = parseInt(display.value);
            const result = math.isPrime(num);
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)