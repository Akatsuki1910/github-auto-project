// ... (Existing code)
//Added squared-negative functionality
document.getElementById('squared-negative')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = -(value * value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
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
//Added inverse functionality
document.getElementById('inverse')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = (1 / value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added cube functionality
document.getElementById('cube')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = (value * value * value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});