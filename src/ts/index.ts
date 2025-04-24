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
// Added hypot functionality
document.getElementById('hypot')?.addEventListener('click', () => {
    try {
        //Hypot needs at least two arguments
        const values = display.value.split(',');
        if (values.length < 2)
            throw new Error("Hypot needs two or more arguments separated by commas");
        display.value = math.hypot(...values.map(parseFloat)).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
// Added max functionality
document.getElementById('max')?.addEventListener('click', () => {
    try {
        const values = display.value.split(',');
        if (values.length < 2)
            throw new Error("Max needs two or more arguments separated by commas");
        display.value = math.max(...values.map(parseFloat)).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});