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
    const ansButton = document.getElementById('ans');
    ansButton.addEventListener('click', () => {
        display.value += lastAnswer;
        currentExpression += lastAnswer;
    });
    const copyButton = document.getElementById('copy');
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(display.value).then(() => {
            alert('Copied to clipboard!');
        });
    });
    // Added feature: Current expression display
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
    document.addEventListener('click', (event) => {
        if (event.target instanceof HTMLButtonElement && event.target.classList.contains('digit')) {
            currentExpression += event.target.dataset.key;
            currentExpressionDisplay.textContent = currentExpression;
        }
    });
    // Added feature: Clear current expression button
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', () => {
        currentExpression = '';
        currentExpressionDisplay.textContent = currentExpression;
    });
    // Added feature: Disable scientific buttons when scientific mode is off
    const toggleScientificButton = document.getElementById('toggleScientific');
    const scientificPad = document.getElementById('scientific-pad');
    toggleScientificButton.addEventListener('click', () => {
        const isScientific = scientificPad.style.display === 'block';
        scientificPad.style.display = isScientific ? 'none' : 'block';
        const scientificButtons = scientificPad.querySelectorAll('button');
        scientificButtons.forEach(button => button.disabled = isScientific);
    });
    // ... (Rest of the existing code)
});