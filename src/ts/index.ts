// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
window.addEventListener('load', () => {
    // ... (Existing code)
    //Added a keyboard support
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key === 'Enter') {
            try {
                const result = math.evaluate(currentExpression);
                display.value = result;
                currentExpression = result.toString();
            }
            catch (error) {
                display.value = 'Error';
            }
        }
        // ... (Existing keyboard handling logic)
        if (key === 'c' || key === 'C') {
            currentExpression = '';
            currentExpressionDisplay.textContent = '';
        }
        if (key === 'Backspace') {
            currentExpression = currentExpression.slice(0, -1);
            currentExpressionDisplay.textContent = currentExpression;
        }
        if (key === 'm' || key === 'M') {
            memoryValue = Number(display.value);
        }
        if (key === 'r' || key === 'R') {
            currentExpression += memoryValue.toString();
            currentExpressionDisplay.textContent = currentExpression;
        }
    });
    // ... (Existing code)
});