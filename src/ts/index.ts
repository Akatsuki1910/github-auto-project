// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
let history = [];
let isCalculatorLocked = false;
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    const lockButton = document.getElementById('lock-calculator');
    lockButton.addEventListener('click', () => {
        isCalculatorLocked = !isCalculatorLocked;
        lockButton.textContent = isCalculatorLocked ? 'Unlock' : 'Lock';
        const allButtons = document.querySelectorAll('#calculator button');
        allButtons.forEach(button => button.disabled = isCalculatorLocked);
        display.disabled = isCalculatorLocked;
        // Added: Store lock state in localStorage
        localStorage.setItem('calculatorLocked', isCalculatorLocked.toString());
    });
    // Added: Retrieve lock state on load
    const storedLockState = localStorage.getItem('calculatorLocked');
    if (storedLockState) {
        isCalculatorLocked = storedLockState === 'true';
        lockButton.textContent = isCalculatorLocked ? 'Unlock' : 'Lock';
        const allButtons = document.querySelectorAll('#calculator button');
        allButtons.forEach(button => button.disabled = isCalculatorLocked);
        display.disabled = isCalculatorLocked;
    }
    // ... (Rest of existing code)
});