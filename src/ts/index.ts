// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    const historyDisplay = document.getElementById('history-display');
    const equalsButton = document.querySelector('.equals');
    const clearHistoryButton = document.getElementById('clear-history');
    const ansButton = document.getElementById('ans');
    const copyButton = document.getElementById('copy');
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
    const backspaceButton = document.getElementById('backspace');
    const memoryRecallButton = document.getElementById('memory-recall'); //Memory Recall button
    const memoryStoreButton = document.getElementById('memory-store');
    const memoryClearButton = document.getElementById('memory-clear'); // Memory Clear button
    if (equalsButton) {
        // ... (Existing equalsButton event listener)
    }
    if (clearHistoryButton && historyDisplay) {
        // ... (Existing clearHistoryButton event listener)
    }
    if (ansButton) {
        // ... (Existing ansButton event listener)
    }
    if (copyButton && display) {
        // ... (Existing copyButton event listener)
    }
    document.querySelectorAll('.digit, .operator, .decimal').forEach(button => {
        // ... (Existing digit/operator/decimal event listener)
    });
    if (backspaceButton && display) {
        // ... (Existing backspaceButton event listener)
    }
    if (memoryRecallButton && display) {
        // ... (Existing memoryRecallButton event listener)
    }
    if (memoryStoreButton && display) {
        // ... (Existing memoryStoreButton event listener)
    }
    if (memoryClearButton) {
        memoryClearButton.addEventListener('click', () => {
            memoryValue = 0;
        });
    }
    // ... (Other existing code)
});