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
        //Added keyboard support for Memory operations
        if (key === 'm' || key === 'M') {
            memoryValue = parseFloat(display.value);
        }
        if (key === 'r' || key === 'R') {
            display.value = memoryValue.toString();
        }
        if (key === 'c' || key === 'C') {
            memoryValue = 0; // Clear memory
        }
    });
    // ... (Existing code)
});