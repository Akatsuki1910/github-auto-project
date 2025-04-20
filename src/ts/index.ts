// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... other existing code ...
    const historyDisplay = document.getElementById('history-display');
    const equalsButton = document.querySelector('.equals');
    const clearHistoryButton = document.getElementById('clear-history');
    const ansButton = document.getElementById('ans');
    const copyButton = document.getElementById('copy');
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
    if (equalsButton) {
        equalsButton.addEventListener('click', () => {
            try {
                const result = math.evaluate(display.value);
                display.value = result.toString();
                lastAnswer = result;
                if (historyDisplay) {
                    const historyItem = document.createElement('p');
                    historyItem.textContent = `${display.value}`;
                    historyDisplay.appendChild(historyItem);
                }
                // Add to history length display
                const historyLengthSpan = document.getElementById('history-length');
                if (historyLengthSpan) {
                    historyLengthSpan.textContent = `History Length: ${historyDisplay.children.length}`;
                }
                currentExpression = '';
                if (currentExpressionDisplay) {
                    currentExpressionDisplay.textContent = currentExpression;
                }
            }
            catch (error) {
                display.value = 'Error';
            }
        });
    }
    if (clearHistoryButton && historyDisplay) {
        clearHistoryButton.addEventListener('click', () => {
            historyDisplay.innerHTML = ''; // Clear history display
            const historyLengthSpan = document.getElementById('history-length');
            if (historyLengthSpan) {
                historyLengthSpan.textContent = `History Length: 0`;
            }
        });
    }
    if (ansButton) {
        ansButton.addEventListener('click', () => {
            display.value += lastAnswer;
        });
    }
    if (copyButton && display) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(display.value);
        });
    }
    document.querySelectorAll('.digit, .operator, .decimal').forEach(button => {
        button.addEventListener('click', () => {
            const key = button.getAttribute('data-key');
            if (key) {
                display.value += key;
                currentExpression += key;
                if (currentExpressionDisplay) {
                    currentExpressionDisplay.textContent = currentExpression;
                }
            }
        });
    });
    // ... (Other existing code)
});
