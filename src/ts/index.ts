// ... (Existing code)
//Added expm1 functionality
document.getElementById('expm1')?.addEventListener('click', () => {
    try {
        display.value = math.expm1(parseFloat(display.value)).toString();
    }
    catch (error) {
        display.value = 'Error';
    }
});
//Added cbrt functionality
document.getElementById('cbrt')?.addEventListener('click', () => {
    try {
        display.value = math.cbrt(parseFloat(display.value)).toString();
    }
    catch (error) {
        display.value = 'Error';
    }
});