// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
window.addEventListener('load', () => {
    // ... (Existing code)
    const memoryStoreButton = document.getElementById('memory-store');
    if (memoryStoreButton) {
        memoryStoreButton.addEventListener('click', () => {
            memoryValue = parseFloat(display.value);
        });
    }
    const memoryRecallButton = document.getElementById('memory-recall');
    if (memoryRecallButton) {
        memoryRecallButton.addEventListener('click', () => {
            display.value = memoryValue.toString();
        });
    }
    const memoryClearButton = document.getElementById('memory-clear');
    if (memoryClearButton) {
        memoryClearButton.addEventListener('click', () => {
            memoryValue = 0;
        });
    }
    const toggleThemeButton = document.getElementById('toggle-theme');
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('light-scheme');
            document.body.classList.toggle('dark-scheme');
            //Added logic to change display and calculator colors with theme
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
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
    const operatorButtons = document.querySelectorAll('.operator');
    const digitButtons = document.querySelectorAll('.digit');
    const decimalButton = document.querySelector('.decimal');
    digitButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentExpression += button.textContent;
            currentExpressionDisplay.textContent = currentExpression;
        });
    });
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentExpression += button.textContent;
            currentExpressionDisplay.textContent = currentExpression;
        });
    });
        decimalButton.addEventListener('click', () => {
            currentExpression += decimalButton.textContent;
            currentExpressionDisplay.textContent = currentExpression;
        });
    // ... (rest of the code)
});