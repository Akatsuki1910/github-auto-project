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
    // ... (Other existing code)
});
