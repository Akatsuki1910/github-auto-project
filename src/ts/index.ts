// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
window.addEventListener('load', () => {
    // ... (Existing code)
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        // ... existing code
        if (key === 'Enter') {
            equals.click();
        }
        //Added keypress support for digits and operators
        if (!isNaN(parseInt(key))) {
            const digit = document.querySelector(`button.digit[data-key='${key}']`);
            if (digit) {
                digit.click();
            }
        }
        const operators = ['+', '-', '*', '/', '.'];
        if (operators.includes(key)) {
            const operator = document.querySelector(`button.operator[data-key='${key}']`);
            if (operator) {
                operator.click();
            }
            const decimal = document.querySelector(`button.decimal[data-key='${key}']`);
            if (decimal) {
                decimal.click();
            }
        }
        // Add backspace key support
        if (key === 'Backspace') {
            backspace.click();
        }
    });
    const memoryStore = document.getElementById('memory-store');
    const memoryRecall = document.getElementById('memory-recall');
    const memoryClear = document.getElementById('memory-clear');
    const percentage = document.getElementById('percentage');
    memoryStore.addEventListener('click', () => {
        memoryValue = parseFloat(display.value);
    });
    memoryRecall.addEventListener('click', () => {
        display.value = memoryValue.toString();
    });
    memoryClear.addEventListener('click', () => {
        memoryValue = 0;
    });
    percentage.addEventListener('click', () => {
        display.value = (parseFloat(display.value) / 100).toString();
    });
    // ... (Existing code)
});