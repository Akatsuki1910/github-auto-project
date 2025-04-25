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
// Added mean functionality
document.getElementById('mean')?.addEventListener('click', () => {
    try {
        const values = display.value.split(',');
        display.value = math.mean(...values.map(parseFloat)).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
// Added variance functionality
document.getElementById('variance')?.addEventListener('click', () => {
    try {
        const values = display.value.split(',');
        display.value = math.variance(...values.map(parseFloat)).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
// Added standard deviation functionality
document.getElementById('std')?.addEventListener('click', () => {
    try {
        const values = display.value.split(',');
        display.value = math.std(...values.map(parseFloat)).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});