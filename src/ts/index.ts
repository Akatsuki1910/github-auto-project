// ... (Existing code)
//Added asin functionality
document.getElementById('asin')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = Math.asin(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});