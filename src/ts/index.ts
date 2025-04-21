// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
let history = [];
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
    const historyDisplay = document.getElementById('history-display');
    const historyPanel = document.getElementById('history-panel');
    const historyLengthSpan = document.getElementById('history-length');
    const openHistoryButton = document.getElementById('open-history');
    const calculateExpressionButton = document.getElementById('calculate-expression');
    //Added feature: copy to clipboard functionality for history items
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard: " + text);
    }
    openHistoryButton.addEventListener('click', () => {
        if (historyPanel.style.display === 'none') {
            historyPanel.style.display = 'block';
        }
        else {
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
    const ansButton = document.getElementById('ans');
    ansButton.addEventListener('click', () => {
        display.value += lastAnswer;
        currentExpression += lastAnswer;
        currentExpressionDisplay.textContent = currentExpression;
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
            item.addEventListener('dblclick', () => {
                copyToClipboard(item.textContent);
            });
        });
    }
    display.addEventListener('dblclick', () => {
        display.value = '';
    });
    document.addEventListener('keydown', (event) => {
        if (/^[0-9]$/.test(event.key) ||
            ['+', '-', '*', '/', '.', 'Enter', 'Backspace'].includes(event.key)) {
            if (event.key === 'Enter') {
                document.querySelector('.equals').click();
            }
            else if (event.key === 'Backspace') {
                display.value = display.value.slice(0, -1);
                currentExpression = currentExpression.slice(0, -1);
                currentExpressionDisplay.textContent = currentExpression;
            }
            else {
                display.value += event.key;
                currentExpression += event.key;
                currentExpressionDisplay.textContent = currentExpression;
            }
        }
    });
    const clearHistoryButton = document.getElementById('clear-history');
    clearHistoryButton.addEventListener('click', () => {
        history = [];
        updateHistoryDisplay();
    });
});