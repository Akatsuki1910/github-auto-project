// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    const toggleThemeButton = document.getElementById('toggle-theme');
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('light-scheme');
            document.body.classList.toggle('dark-scheme');
        });
    }
    const duplicateButton = document.getElementById('duplicate');
    if (duplicateButton) {
        duplicateButton.addEventListener('click', () => {
            const currentValue = display.value;
            display.value += currentValue;
        });
    }
    const clearAllButton = document.getElementById('clear-all');
    if (clearAllButton) {
        clearAllButton.addEventListener('click', () => {
            display.value = '';
            document.getElementById('currentExpressionDisplay').innerText = '';
        });
    }
    const copyButton = document.getElementById('copy');
    if (copyButton) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(display.value).then(() => {
                alert('Copied to clipboard!');
            });
        });
    }
    const resetButton = document.getElementById('reset');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            display.value = '0';
        });
    }
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
    const equalsButton = document.querySelector('.equals');
    if (equalsButton) {
        equalsButton.addEventListener('click', () => {
            try {
                const result = math.evaluate(display.value);
                display.value = result.toString();
                currentExpressionDisplay.innerText = display.value;
                //Added history feature
                const historyDisplay = document.getElementById('history-display');
                if (historyDisplay) {
                    const newEntry = document.createElement('p');
                    newEntry.textContent = `${display.value}`;
                    historyDisplay.appendChild(newEntry);
                    const historyLengthSpan = document.getElementById('history-length');
                    if (historyLengthSpan) {
                        historyLengthSpan.textContent = `History Length: ${historyDisplay.children.length}`;
                    }
                }
            }
            catch (error) {
                display.value = 'Error';
            }
        });
    }
    const clearHistoryButton = document.getElementById('clear-history');
    if (clearHistoryButton) {
        clearHistoryButton.addEventListener('click', () => {
            const historyDisplay = document.getElementById('history-display');
            if (historyDisplay) {
                historyDisplay.innerHTML = ''; // Clear history display
                const historyLengthSpan = document.getElementById('history-length');
                if (historyLengthSpan) {
                    historyLengthSpan.textContent = `History Length: 0`; //Reset history length
                }
            }
        });
    }
    // Keyboard support
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (/^[0-9]$/.test(key)) {
            display.value += key;
        }
    });
});