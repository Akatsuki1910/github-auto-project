// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
let history = [];
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // Add keyboard support for operators and functions
    document.addEventListener('keydown', (event) => {
        if (/^[0-9]$/.test(event.key) ||
            ['+', '-', '*', '/', '.', 'Enter', 'Backspace', '(', ')', '^', 'sqrt', 'sin', 'cos', 'tan', 'log', 'exp'].includes(event.key)) {
            if (event.key === 'Enter') {
                document.querySelector('.equals').click();
            }
            else if (event.key === 'Backspace') {
                display.value = display.value.slice(0, -1);
                currentExpression = currentExpression.slice(0, -1);
            }
            else {
                display.value += event.key;
                currentExpression += event.key;
            }
        }
    });
    // ... (Rest of the existing code)
});