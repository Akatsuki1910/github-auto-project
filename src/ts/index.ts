// ... (Existing code)
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    let currentExpression = currentExpressionDisplay.textContent || '';
    currentExpression += '**';
    currentExpressionDisplay.textContent = currentExpression;
});
// ... (Rest of the code)