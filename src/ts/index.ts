// ... (Existing code)
const cbrtButton = document.getElementById('cbrt') as HTMLButtonElement;
cbrtButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    let currentExpression = currentExpressionDisplay.textContent || '';
    currentExpression += 'cbrt('; // Add cbrt function to expression
    currentExpressionDisplay.textContent = currentExpression;
});
// ... (Rest of the code)