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
//Added isNegative functionality
document.getElementById('isNegative')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.isNegative(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});