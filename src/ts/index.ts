// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
window.addEventListener('load', () => {
    // ... (Existing code)
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key === '=') {
            equals.click();
        }
        if (key === 'Delete') {
            display.value = '0';
        }
        if (key === 'm' || key === 'M') {
            memoryValue = parseFloat(display.value);
        }
        if (key === 'r' || key === 'R') {
            display.value = memoryValue.toString();
        }
        if (key === 'c' || key === 'C') {
            memoryValue = 0;
        }
        if (key === 'Backspace') {
            backspace.click();
        }
        if (key === 'Escape') {
            clearAll.click();
        }
        if (key === '+' || key === '-' || key === '*' || key === '/') {
            const operator = document.querySelector(`button.operator[data-key='${key}']`);
            if (operator) {
                operator.click();
            }
        }
        if (key === 'Enter') {
            equals.click();
        }
        //Added keypress support for digits
        if (!isNaN(parseInt(key))) {
            const digit = document.querySelector(`button.digit[data-key='${key}']`);
            if (digit) {
                digit.click();
            }
        }
    });
    // ... (Existing code)
});