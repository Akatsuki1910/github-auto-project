// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
let history = [];
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    const historyDisplay = document.getElementById('history-display');
    const historyLengthSpan = document.getElementById('history-length');
    const clearHistoryButton = document.getElementById('clear-history');
    const openHistoryButton = document.getElementById('open-history');
    const historyPanel = document.getElementById('history-panel');
    const copyButton = document.getElementById('copy');
    const ansButton = document.getElementById('ans');
    const calculateExpressionButton = document.getElementById('calculate-expression');
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(display.value);
    });
    ansButton.addEventListener('click', () => {
        display.value += lastAnswer;
    });

    clearHistoryButton.addEventListener('click', () => {
        history = [];
        updateHistoryDisplay();
    });
    openHistoryButton.addEventListener('click', () => {
        historyPanel.style.display = historyPanel.style.display === 'none' ? 'block' : 'none';
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            historyPanel.style.display = 'none';
        }
    });
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
    // ... (Rest of existing code)
    display.addEventListener('dblclick', () => {
        display.value = '';
    });
});