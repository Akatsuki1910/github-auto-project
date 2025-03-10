// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
// ... (Other existing code)
const lastAnswerButton = document.getElementById('last-answer') as HTMLButtonElement;
lastAnswerButton.addEventListener('click', () => {
    currentExpression += lastAnswer.toString();
    currentExpressionDisplay.textContent = currentExpression;
});
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        lastAnswer = eval(currentExpression);
        display.value = lastAnswer.toString();
        // Add history entry
        const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
        const historyEntry = document.createElement('p');
        historyEntry.textContent = `${currentExpression} = ${lastAnswer}`;
        historyDisplay.appendChild(historyEntry);

        // Clear current expression after calculation
        currentExpression = '';
        currentExpressionDisplay.textContent = '';

        // Added feature: Copy result to clipboard
        navigator.clipboard.writeText(lastAnswer.toString()).then(() => {
            console.log('Result copied to clipboard');
        }, (err) => {
            console.error('Failed to copy result: ', err);
        });
    }
    catch (error) {
        display.value = 'Error';
    }
});