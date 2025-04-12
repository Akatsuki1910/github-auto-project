// ... (Existing code)
const calculateXToThePowerOfYButton = document.getElementById('calculate-x-to-the-power-of-y') as HTMLButtonElement;
calculateXToThePowerOfYButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    currentExpressionDisplay.textContent = currentValue + "^";
    isAwaitingSecondOperand = true;
    pendingOperator = "^";
    firstOperand = currentValue;
});