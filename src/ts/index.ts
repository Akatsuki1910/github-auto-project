// ... (Existing code)
const toggleDisplayButton = document.getElementById('toggle-display') as HTMLButtonElement;
const displayInput = document.getElementById('display') as HTMLInputElement;
toggleDisplayButton.addEventListener('click', () => {
    if (displayInput.style.display === 'none') {
        displayInput.style.display = 'block';
    }
    else {
        displayInput.style.display = 'none';
    }
});
const toggleCurrentExpressionDisplayButton = document.getElementById('toggle-current-expression-display') as HTMLButtonElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
toggleCurrentExpressionDisplayButton.addEventListener('click', () => {
    if (currentExpressionDisplay.style.display === 'none') {
        currentExpressionDisplay.style.display = 'block';
    }
    else {
        currentExpressionDisplay.style.display = 'none';
    }
});
// ... (Rest of the code)