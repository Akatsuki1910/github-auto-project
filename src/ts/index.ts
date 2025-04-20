// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
    const calculateExpressionButton = document.getElementById('calculate-expression');
    const ansButton = document.getElementById('ans');
    const copyButton = document.getElementById('copy');
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
    if (ansButton && display) {
        ansButton.addEventListener('click', () => {
            display.value = lastAnswer.toString();
            currentExpression += lastAnswer.toString();
            if (currentExpressionDisplay) {
                currentExpressionDisplay.textContent = currentExpression;
            }
        });
    }
    if (copyButton && display) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(display.value);
        });
    }
});