// ... (Existing code)
const isPrimeButton = document.getElementById('isPrime') as HTMLButtonElement;
isPrimeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = 'Invalid Input';
            return;
        }
        display.value = math.isPrime(num).toString();
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)