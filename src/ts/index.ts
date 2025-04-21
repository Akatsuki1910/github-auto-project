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
    const currentTimeButton = document.getElementById('current-time');
    // ... (Existing code)
    const duplicateButton = document.getElementById('duplicate');
    duplicateButton.addEventListener('click', () => {
        display.value = display.value + display.value;
    });
    // ... (Rest of existing code)
});