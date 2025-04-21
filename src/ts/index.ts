// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    //Added keyboard support
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (!isNaN(parseInt(key)) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            currentExpression += key;
            currentExpressionDisplay.textContent = currentExpression;
        }
        if (key === 'Enter' || key === '=') {
            calculateExpressionButton.click();
        }
        if (key === 'Backspace') {
            currentExpression = currentExpression.slice(0, -1);
            currentExpressionDisplay.textContent = currentExpression;
        }
        if (key === 'Escape') {
            currentExpression = '';
            currentExpressionDisplay.textContent = '';
            display.value = '';
        }
    });
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
    const calculateExpressionButton = document.getElementById('calculate-expression');
    const ansButton = document.getElementById('ans');
    const copyButton = document.getElementById('copy');
    // Added copy functionality
    if (copyButton && display) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(display.value).then(() => {
                alert('Copied to clipboard: ' + display.value);
            })
                .catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }
    // ... (Rest of the existing code)
});