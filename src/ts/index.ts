// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
window.addEventListener('load', () => {
    // ... (Existing code)
    //Added a keyboard support
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        // ... (Existing code)
        if (key === '=') {
            equals.click();
        }
        // Added keyboard support for the 'Delete' key to clear the current input
        if (key === 'Delete') {
            display.value = '0'; // Clear the current display value
        }
    });
    // ... (Existing code)
});