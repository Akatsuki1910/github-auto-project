// ... (Existing code)
let keyboardInputEnabled = false;
let calculatorLocked = false;
window.addEventListener('load', () => {
    // ... (Existing code)
    const keyboardToggleButton = document.getElementById('keyboard-toggle');
    keyboardToggleButton.addEventListener('click', () => {
        keyboardInputEnabled = !keyboardInputEnabled;
        keyboardToggleButton.textContent = keyboardInputEnabled ? 'Disable Keyboard Input' : 'Enable Keyboard Input';
    });
    const lockButton = document.getElementById('lock-calculator');
    // ... (Lock button logic)
    const exp2Button = document.getElementById('exp2');
    exp2Button.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.pow(2, currentValue).toString();
        }
    });
    const fibonacciButton = document.getElementById('fibonacci');
    fibonacciButton.addEventListener('click', () => {
        const n = parseInt(display.value);
        if (!isNaN(n) && n >= 0) {
            display.value = fibonacci(n).toString();
        }
    });
    function fibonacci(n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    // ... (Rest of existing code)
});