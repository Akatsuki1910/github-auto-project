// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
let history = [];
let isCalculatorLocked = false;
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    const lockButton = document.createElement('button');
    lockButton.textContent = 'Lock';
    lockButton.id = 'lock-calculator';
    document.body.appendChild(lockButton);
    lockButton.addEventListener('click', () => {
        isCalculatorLocked = !isCalculatorLocked;
        lockButton.textContent = isCalculatorLocked ? 'Unlock' : 'Lock';
        const allButtons = document.querySelectorAll('#calculator button');
        allButtons.forEach(button => button.disabled = isCalculatorLocked);
        display.disabled = isCalculatorLocked;
    });
    // ... (Rest of existing code)
});