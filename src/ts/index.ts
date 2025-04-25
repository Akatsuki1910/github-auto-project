// ... (Existing code)
//Added isPrime functionality
document.getElementById('isPrime')?.addEventListener('click', () => {
    try {
        const value = parseInt(display.value);
        display.value = math.isPrime(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});