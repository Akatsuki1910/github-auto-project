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
// Added derivative functionality
document.getElementById('derivative')?.addEventListener('click', () => {
    try {
        const expression = display.value;
        const derivative = math.derivative(expression, 'x').toString(); // Assuming 'x' is the variable
        display.value = derivative;
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added log functionality
document.getElementById('log')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.log10(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added exp functionality
document.getElementById('exp')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.exp(value).toString();
    }
    catch (error) {
        display.value = 'Error:' + error.message;
    }
});
//Added pow functionality
document.getElementById('pow')?.addEventListener('click', () => {
    try {
        const base = parseFloat(display.value);
        const exponent = prompt("Enter exponent:", "2");
        if (exponent !== null) {
            display.value = math.pow(base, parseFloat(exponent)).toString();
        }
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added round functionality
document.getElementById('round')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.round(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added floor functionality
document.getElementById('floor')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.floor(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
