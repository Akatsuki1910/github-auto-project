// ... (Existing code)
const calculateExpressionButton = document.getElementById('calculate-expression');
if (calculateExpressionButton) {
    calculateExpressionButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
        try {
            const result = math.evaluate(display.value);
            display.value = result.toString();
            if (currentExpressionDisplay) {
                currentExpressionDisplay.textContent = display.value;
            }
            lastAnswer = result;
            history.push(display.value);
        } catch (error) {
            display.value = 'Error';
            if (currentExpressionDisplay) {
                currentExpressionDisplay.textContent = 'Error';
            }
        }
    });
}
// ... (Existing code)