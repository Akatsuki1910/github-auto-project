// ... (Existing code)
//Added Feature: Reset Button
const resetButton = document.getElementById('reset') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
    display.value = '';
    currentExpression = '';
    currentExpressionDisplay.textContent = '';
});

// ... (Rest of the existing code)