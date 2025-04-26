// ... (Existing code)
//Added duplicate functionality
document.getElementById('duplicate')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = (value * 2).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});