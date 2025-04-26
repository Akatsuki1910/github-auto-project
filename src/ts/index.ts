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
// Added e functionality
document.getElementById('e')?.addEventListener('click', () => {
    display.value = Math.E.toString();
});
// Added 10x functionality
document.getElementById('tenx')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = (value * 10).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added 2^x functionality
document.getElementById('twox')?.addEventListener('click', () => {
    try {
        const value = parseFloat(display.value);
        display.value = Math.pow(2, value).toString();
    } catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
// Added percentage change functionality
document.getElementById('percent-change')?.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const previousValue = parseFloat(prompt('Enter previous value:'));
        const percentageChange = ((currentValue - previousValue) / previousValue) * 100;
        display.value = percentageChange.toString();
    } catch (error) {
        display.value = 'Error: ' + error.message;
    }
});