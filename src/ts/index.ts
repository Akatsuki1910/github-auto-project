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
    lockButton.addEventListener('click', () => {
        calculatorLocked = !calculatorLocked;
        lockButton.textContent = calculatorLocked ? 'Unlock' : 'Lock';
        const buttons = document.querySelectorAll('#calculator button');
        buttons.forEach(button => {
            if (button !== lockButton) {
                button.disabled = calculatorLocked;
            }
        });
        // Lock/unlock keyboard input based on calculator lock
        keyboardInputEnabled = !calculatorLocked;
        keyboardToggleButton.textContent = keyboardInputEnabled ? 'Disable Keyboard Input' : 'Enable Keyboard Input';
        if (calculatorLocked) {
            display.value = 'Locked';
        }
        else {
            // Restore previous display value if available. If not, set to 0.
            display.value = historyState?.currentValue || '0';
        }
    });
    document.addEventListener('keydown', (event) => {
        if (!keyboardInputEnabled || calculatorLocked) {
            return;
        }
        const key = event.key;
        if (/^[0-9]$/.test(key)) {
            document.querySelector(`button[data-key='${key}']`).click();
        }
    });
    // ... (Rest of existing code)
});