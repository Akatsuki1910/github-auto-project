// ... (Existing code)
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