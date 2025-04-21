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
    currentTimeButton.addEventListener('click', () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        display.value = timeString;
    });
    const currentDateButton = document.getElementById('current-date');
    currentDateButton.addEventListener('click', () => {
        const now = new Date();
        const dateString = now.toLocaleDateString();
        display.value = dateString;
    });
    // ... (Rest of existing code)
});