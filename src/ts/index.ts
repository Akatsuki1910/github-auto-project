// ... (Existing code)
//Added cbrt functionality
document.getElementById('cbrt')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.cbrt(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added sign functionality
document.getElementById('sign')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = math.sign(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added mode functionality to toggle between Radians and Degrees
let angleMode = 'rad'; // Initial mode is radians
document.getElementById('mode')?.addEventListener('click', () => {
    angleMode = angleMode === 'rad' ? 'deg' : 'rad';
    document.getElementById('mode').textContent = `Mode: ${angleMode.toUpperCase()}`;
    // You'll need to update any trigonometric calculations to use the current angleMode
    // Example:
    // const result = angleMode === 'rad' ? math.sin(value) : math.sin(math.unit(value, 'deg'));
});