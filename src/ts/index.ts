// ... (Existing code)
//Added cbrt functionality
document.getElementById('cbrt')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.cbrt(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added sign functionality
document.getElementById('sign')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.sign(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});