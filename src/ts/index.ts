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
    });
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
    const clearButton = document.getElementById('clear');
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            currentExpression = '';
            currentExpressionDisplay.textContent = '';
        });
    }
    // ... (rest of the code)
});