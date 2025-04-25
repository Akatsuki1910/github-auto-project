// ... (Existing code)
//Added simplify functionality
document.getElementById('simplify')?.addEventListener('click', () => {
    try {
        const value = display.value;
        display.value = math.simplify(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});