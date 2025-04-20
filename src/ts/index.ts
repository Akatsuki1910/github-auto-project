// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... other existing const declarations
    const calculateExpressionButton = document.getElementById('calculate-expression');
    // ... (Existing event listeners)
    if (calculateExpressionButton && display && currentExpressionDisplay) {
        calculateExpressionButton.addEventListener('click', () => {
            try {
                const result = math.evaluate(currentExpression);
                display.value = result.toString();
                lastAnswer = result;
                addToHistory(currentExpression + '=' + result);
                currentExpression = '';
                currentExpressionDisplay.textContent = '';
            }
            catch (error) {
                display.value = 'Error';
            }
        });
    }
});