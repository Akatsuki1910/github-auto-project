// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
window.addEventListener('load', () => {
    // ... (Existing code)
    //Added a keyboard support
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (/^[0-9]$/.test(key)) {
            currentExpression += key;
            currentExpressionDisplay.textContent = currentExpression;
        }
        //Added Enter key support to trigger equals button
        if (key === 'Enter') {
            const equalsButton = document.querySelector('.equals');
            if (equalsButton) {
                equalsButton.click();
            }
        }
    });
    const memoryStoreButton = document.getElementById('memory-store');
    // ... (Memory buttons event listeners)
    const toggleThemeButton = document.getElementById('toggle-theme');
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('light-scheme');
            document.body.classList.toggle('dark-scheme');
            const display = document.getElementById('display');
            const calculator = document.getElementById('calculator');
            if (document.body.classList.contains('dark-scheme')) {
                display.style.color = '#eee';
                calculator.style.backgroundColor = '#333';
            }
            else {
                display.style.color = '#333';
                calculator.style.backgroundColor = '#fff';
            }
        });
    }
    //Current Expression Display
    // ... (Existing current expression display logic)
    const clearButton = document.getElementById('clear');
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            currentExpression = '';
            currentExpressionDisplay.textContent = '';
        });
    }
    //Added Backspace Button Functionality
    const backspaceButton = document.getElementById('backspace');
    if (backspaceButton) {
        backspaceButton.addEventListener('click', () => {
            currentExpression = currentExpression.slice(0, -1);
            currentExpressionDisplay.textContent = currentExpression;
        });
    }
    // ... (rest of the code)
});