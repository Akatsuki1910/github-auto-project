// ... (Existing code)
//Added Feature: Cubed
const cubedButton = document.getElementById('cubed') as HTMLButtonElement;
cubedButton.addEventListener('click', () => {
    display.value += '**3';
    currentExpression += '**3';
    currentExpressionDisplay.textContent = currentExpression;
});

// ... (Rest of the existing code)