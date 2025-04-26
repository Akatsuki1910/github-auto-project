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
//Added acos functionality
document.getElementById('acos')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = Math.acos(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added atan functionality
document.getElementById('atan')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = Math.atan(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added sinh functionality
document.getElementById('sinh')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = Math.sinh(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added cosh functionality
document.getElementById('cosh')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = Math.cosh(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
// Added tanh functionality
document.getElementById('tanh')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = Math.tanh(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});