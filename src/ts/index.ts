// ... (Existing code)
const log2Button = document.getElementById('log2') as HTMLButtonElement;
log2Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    let currentExpression = currentExpressionDisplay.textContent || '';
    currentExpression += 'log2('; // Add log2 function to expression
    currentExpressionDisplay.textContent = currentExpression;
});
// ... (Rest of the code)