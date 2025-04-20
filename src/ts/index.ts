// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
window.addEventListener('load', () => {
    // ... (Existing code)
    const calculateExpressionButton = document.getElementById('calculate-expression');
    calculateExpressionButton.addEventListener('click', () => {
        try {
            const result = math.evaluate(currentExpression);
            display.value = result.toString();
            lastAnswer = result;
        }
        catch (error) {
            display.value = 'Error';
        }
    });
    // ... (Other existing code)
});