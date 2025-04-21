// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
let history = [];
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    const historyDisplay = document.getElementById('history-display');
    //Added keyboard support
    document.addEventListener('keydown', (event) => {
        // ... (Existing keyboard support code)
    });
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
    const calculateExpressionButton = document.getElementById('calculate-expression');
    const ansButton = document.getElementById('ans');
    const copyButton = document.getElementById('copy');
    // ... (Existing copy functionality code)
    calculateExpressionButton.addEventListener('click', () => {
        try {
            const result = math.evaluate(currentExpression);
            display.value = result;
            lastAnswer = result;
            history.push({ expression: currentExpression, result: result });
            updateHistoryDisplay();
            currentExpression = '';
            currentExpressionDisplay.textContent = '';
        }
        catch (error) {
            display.value = 'Error';
        }
    });
    function updateHistoryDisplay() {
        historyDisplay.innerHTML = '';
        history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.textContent = `${item.expression} = ${item.result}`;
            historyDisplay.appendChild(historyItem);
        });
    }
    // ... (Rest of existing code)
});