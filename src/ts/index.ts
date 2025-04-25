// ... (Existing code)
//Added isPrime functionality
document.getElementById('isPrime')?.addEventListener('click', () => {
    try {
        const value = parseInt(display.value);
        display.value = math.isPrime(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added isNegative functionality
document.getElementById('isNegative')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.isNegative(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added isInteger functionality
document.getElementById('isInteger')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.isInteger(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
// Added isPositive functionality
document.getElementById('isPositive')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.isPositive(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added isNumeric functionality
document.getElementById('isNumeric')?.addEventListener('click', () => {
    try {
        const value = display.value;
        display.value = math.isNumeric(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added isZero functionality
document.getElementById('isZero')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.isZero(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added isFinite functionality
document.getElementById('isFinite')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.isFinite(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added isNaN functionality
document.getElementById('isNaN')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.isNaN(value).toString();
    } catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
