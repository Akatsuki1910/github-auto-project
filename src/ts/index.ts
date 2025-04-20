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
            // Add to history
            const historyDisplay = document.getElementById('history-display');
            const newEntry = document.createElement('p');
            newEntry.textContent = `${currentExpression} = ${result}`;
            historyDisplay.appendChild(newEntry);
            // Update history length display
            const historyLengthSpan = document.getElementById('history-length');
            if (historyLengthSpan) {
                historyLengthSpan.textContent = `History Length: ${historyDisplay.children.length}`;
            }
            currentExpression = ''; // Clear current expression after evaluation
            const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
            if (currentExpressionDisplay) {
                currentExpressionDisplay.textContent = currentExpression;
            }
        }
        catch (error) {
            display.value = 'Error';
        }
    });
    const ansButton = document.getElementById('ans');
    ansButton.addEventListener('click', () => {
        display.value += lastAnswer;
        currentExpression += lastAnswer;
        const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
        if (currentExpressionDisplay) {
            currentExpressionDisplay.textContent = currentExpression;
        }
    });
    // ... (Other existing code)
});