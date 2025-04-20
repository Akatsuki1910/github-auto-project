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
    const memoryStoreButton = document.getElementById('memory-store');
    const memoryRecallButton = document.getElementById('memory-recall');
    const memoryClearButton = document.getElementById('memory-clear');
    const clearHistoryButton = document.getElementById('clear-history');
    const historyDisplay = document.getElementById('history-display');
    let history = [];
    // ... (Existing event listeners)
    if (calculateExpressionButton && display && currentExpressionDisplay) {
        calculateExpressionButton.addEventListener('click', () => {
            try {
                const result = math.evaluate(currentExpression);
                display.value = result.toString();
                lastAnswer = result;
                history.push({ expression: currentExpression, result: result });
                historyDisplay.innerHTML = history.map(item => `<div>${item.expression} = ${item.result}</div>`).join('');
                currentExpression = '';
                currentExpressionDisplay.textContent = '';
            }
            catch (error) {
                display.value = 'Error';
            }
        });
    }
    // ... existing event listeners for ansButton, copyButton, memory buttons
    if (clearHistoryButton && historyDisplay) {
        clearHistoryButton.addEventListener('click', () => {
            history = [];
            historyDisplay.innerHTML = '';
        });
    }
    // History length display
    const historyLengthSpan = document.getElementById('history-length');
    if (historyLengthSpan) {
        historyLengthSpan.textContent = `History Length: ${history.length}`;
        setInterval(() => {
            historyLengthSpan.textContent = `History Length: ${history.length}`;
        }, 100);
    }
});
