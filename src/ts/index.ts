// ... (Existing code)
//Added sum functionality
document.getElementById('sum')?.addEventListener('click', () => {
    try {
        const values = display.value.split(',');
        display.value = math.sum(...values.map(parseFloat)).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added product functionality
document.getElementById('product')?.addEventListener('click', () => {
    try {
        const values = display.value.split(',');
        display.value = math.prod(...values.map(parseFloat)).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});