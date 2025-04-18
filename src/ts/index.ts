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
        if (key === '+/-') {
            try {
                if (currentExpression) {
                    const num = parseFloat(currentExpression);
                    currentExpression = (-num).toString();
                    currentExpressionDisplay.textContent = currentExpression;
                }
            }
            catch (error) {
                // Handle any parsing errors (e.g., if currentExpression is not a number)
                console.error("Error parsing expression:", error);
                display.value = 'Error';
            }
        }
        //Added logic for 'Escape' key to clear the display
        if (key === 'Escape') {
            display.value = '';
            currentExpression = ''; // Also clear the current expression
        }
    });
    // ... (Existing code)
});
