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
        keyboardInputEnabled = !calculatorLocked;
        keyboardToggleButton.textContent = keyboardInputEnabled ? 'Disable Keyboard Input' : 'Enable Keyboard Input';
        if (calculatorLocked) {
            display.value = 'Locked';
        }
        else {
            display.value = historyState?.currentValue || '0';
        }
    });
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-scheme');
        document.body.classList.toggle('light-scheme');
    });
    const fullscreenToggle = document.getElementById('fullscreen-toggle');
    fullscreenToggle.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        else {
            document.documentElement.requestFullscreen();
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