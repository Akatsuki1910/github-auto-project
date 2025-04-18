// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
window.addEventListener('load', () => {
    // ... (Existing code)
    //Added a keyboard support
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        // ... (Existing keyboard handling logic)
        if (key === 'c' || key === 'C') {
            currentExpression = '';
            currentExpressionDisplay.textContent = '';
        }
    });
    // ... (Existing code)
});