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
    // Added copy functionality
    if (copyButton && display) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(display.value).then(() => {
                alert('Copied to clipboard: ' + display.value);
            })
                .catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }
    const memoryStoreButton = document.getElementById('memory-store');
    const memoryRecallButton = document.getElementById('memory-recall');
    const memoryClearButton = document.getElementById('memory-clear');
    const clearHistoryButton = document.getElementById('clear-history');
    const historyDisplay = document.getElementById('history-display');
    let history = [];
    const currentDateTime = () => {
        const now = new Date();
        const dateString = now.toLocaleDateString();
        const timeString = now.toLocaleTimeString();
        return `${dateString} ${timeString}`;
    };
    // Clear History button functionality
    if (clearHistoryButton && historyDisplay) {
        clearHistoryButton.addEventListener('click', () => {
            history = [];
            historyDisplay.innerHTML = '';
        });
    }
    if (calculateExpressionButton && display && currentExpressionDisplay) {
        calculateExpressionButton.addEventListener('click', () => {
            try {
                const result = math.evaluate(currentExpression);
                display.value = result.toString();
                lastAnswer = result;
                history.push({ expression: currentExpression, result: result, timestamp: currentDateTime() });
                historyDisplay.innerHTML = history.map(item => `<div>${item.timestamp} - ${item.expression} = ${item.result}</div>`).join('');
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
        });
    }
    // ... (Existing Code)
});
