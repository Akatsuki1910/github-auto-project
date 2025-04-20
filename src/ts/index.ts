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
        memoryStoreButton.addEventListener('click', () => {
            memoryValue = parseFloat(display.value);
        });
    }
    if (memoryRecallButton && display) {
        memoryRecallButton.addEventListener('click', () => {
            display.value = memoryValue.toString();
            currentExpression += memoryValue.toString();
            if (currentExpressionDisplay) {
                currentExpressionDisplay.textContent = currentExpression;
            }
        });
    }
    if (memoryClearButton) {
        memoryClearButton.addEventListener('click', () => {
            memoryValue = 0;
        });
    }
});
