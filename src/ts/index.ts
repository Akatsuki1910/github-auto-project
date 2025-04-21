// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
let history = [];
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... other existing const declarations
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
    // ... (Existing event listeners)
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
        historyPanel.innerHTML = '';
        history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.textContent = `${item.expression} = ${item.result}`;
            historyDisplay.appendChild(historyItem);
            const panelItem = document.createElement('div');
            panelItem.textContent = `${item.expression} = ${item.result}`;
            historyPanel.appendChild(panelItem);
        });
        historyLengthSpan.textContent = `History Length: ${history.length}`;
        historyPanel.querySelectorAll('div').forEach(item => {
            item.addEventListener('click', () => {
                display.value = item.textContent.split('=')[1].trim();
            });
        });
    }
    display.addEventListener('dblclick', () => {
        display.value = '';
    });
    //Added feature: Keyboard support for digits, operators, and equals
    document.addEventListener('keydown', (event) => {
        if (/^[0-9]$/.test(event.key) ||
            ['+', '-', '*', '/', '.', 'Enter'].includes(event.key)) {
            if (event.key === 'Enter') {
                document.querySelector('.equals').click();
            }
            else {
                display.value += event.key;
                currentExpression += event.key;
                currentExpressionDisplay.textContent = currentExpression;            }
        }
    });
});