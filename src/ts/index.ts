// ... (Existing code)
let keyboardInputEnabled = false;
window.addEventListener('load', () => {
    // ... (Existing code)
    const keyboardToggleButton = document.getElementById('keyboard-toggle');
    keyboardToggleButton.addEventListener('click', () => {
        keyboardInputEnabled = !keyboardInputEnabled;
        keyboardToggleButton.textContent = keyboardInputEnabled ? 'Disable Keyboard Input' : 'Enable Keyboard Input';
    });
    document.addEventListener('keydown', (event) => {
        if (!keyboardInputEnabled) {
            return;
        }
        const key = event.key;
        if (/^[0-9]$/.test(key)) {
            document.querySelector(`button[data-key='${key}']`).click();
        }
    });
    // ... (Rest of existing code)
});