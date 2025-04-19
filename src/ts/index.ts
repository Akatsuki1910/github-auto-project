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
    });
    // ... (Existing code)
});