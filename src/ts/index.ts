// ... (Existing code)
const isPrimeButton = document.getElementById('isPrime') as HTMLButtonElement;
isPrimeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseInt(display.value);
    if (isNaN(num)) {
        display.value = 'Error: Invalid input';
        return;
    }
    if (num <= 1) {
        display.value = 'false';
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            display.value = 'false';
            return;
        }
    }
    display.value = 'true';
});

// ... (Rest of the code)