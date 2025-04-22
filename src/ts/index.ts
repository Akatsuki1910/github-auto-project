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
    // ... (Existing code)
    const exp2Button = document.getElementById('exp2');
    exp2Button.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.pow(2, currentValue).toString();
        }
    });
    // ... (Rest of existing code)
});