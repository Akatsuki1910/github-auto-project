// ... (Existing code)
//Added ceil functionality
document.getElementById('ceil')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.ceil(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});