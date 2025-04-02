// ... (Existing code)
const log10Button = document.getElementById('log10') as HTMLButtonElement;
log10Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    let currentExpression = currentExpressionDisplay.textContent || '';
    currentExpression += 'log10('; // Add log10 function to expression
    currentExpressionDisplay.textContent = currentExpression;
});
// ... (Rest of the code)