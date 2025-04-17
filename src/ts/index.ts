// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const toggleThemeButton = document.getElementById('toggle-theme');
    // ... (Existing code)
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
            }
            catch (error) {
                display.value = 'Error';
            }
        });
    }
    // ... (rest of the code)
});