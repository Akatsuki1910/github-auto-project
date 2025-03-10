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
        currentExpression = '';
        currentExpressionDisplay.textContent = '';
        //Added feature: Clear All History button functionality
        const clearAllHistoryButton = document.getElementById('clear-all-history') as HTMLButtonElement;
        clearAllHistoryButton.addEventListener('click', () => {
            localStorage.removeItem('calculatorHistory'); // Clear history from local storage
            historyDisplay.innerHTML = ''; // Clear history display
        });
        // Store history in local storage
        let history = JSON.parse(localStorage.getItem('calculatorHistory') || '[]');
        history.push({ expression: currentExpression, result: lastAnswer });
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
    }
    catch (error) {
        display.value = 'Error';
    }
});
// Load history from local storage on page load
window.addEventListener('load', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    const history = JSON.parse(localStorage.getItem('calculatorHistory') || '[]');
    history.forEach((entry) => {
        const historyEntry = document.createElement('p');
        historyEntry.textContent = `${entry.expression} = ${entry.result}`;
        historyDisplay.appendChild(historyEntry);
    });
});
