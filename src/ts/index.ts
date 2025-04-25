// ... (Existing code)
//Added isOdd functionality
document.getElementById('isOdd')?.addEventListener('click', () => {
    try {
        const value = parseInt(display.value);
        display.value = math.isOdd(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});
//Added isEven functionality
document.getElementById('isEven')?.addEventListener('click', () => {
    try {
        const value = parseInt(display.value);
        display.value = math.isEven(value).toString();
    }
    catch (error) {
        display.value = 'Error: ' + error.message;
    }
});