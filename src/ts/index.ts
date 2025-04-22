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
    const tripleButton = document.getElementById('triple');
    tripleButton.addEventListener('click', () => {
        display.value = display.value + display.value + display.value;
    });
    const squareRootButton = document.getElementById('square-root');
    squareRootButton.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.sqrt(currentValue).toString();
        }
    });
    const oneOverXButton = document.getElementById('one-over-x');
    oneOverXButton.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue !== 0) {
            display.value = (1 / currentValue).toString();
        }
    });
    const percentCalculationButton = document.getElementById('percent-calculation');
    percentCalculationButton.addEventListener('click', () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = (currentValue / 100).toString();
        }
    });
    // ... (Rest of existing code)
});