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
    const memoryStoreButton = document.getElementById('memory-store');
    const memoryRecallButton = document.getElementById('memory-recall');
    const memoryClearButton = document.getElementById('memory-clear');
    const clearHistoryButton = document.getElementById('clear-history');
    const historyDisplay = document.getElementById('history-display');
    let history = [];
    // ... (Existing event listeners)
    if (calculateExpressionButton && display && currentExpressionDisplay) {
        // ... existing calculateExpressionButton event listener
    }
    if (ansButton && display) {
        // ... existing ansButton event listener
    }
    if (copyButton && display) {
        // ... existing copyButton event listener
    }
    if (memoryStoreButton && display) {
        // ... existing memoryStoreButton event listener
    }
    if (memoryRecallButton && display) {
        // ... existing memoryRecallButton event listener
    }
    if (memoryClearButton) {
        // ... existing memoryClearButton event listener
    }
    if (clearHistoryButton && historyDisplay) {
        clearHistoryButton.addEventListener('click', () => {
            history = [];
            historyDisplay.innerHTML = '';
        });
    }
});
