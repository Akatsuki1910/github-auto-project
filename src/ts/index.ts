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
        }
        catch (error) {
            display.value = 'Error';
        }
    });
    // ... (Other existing code)
});