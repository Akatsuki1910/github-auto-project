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
        // Copy result to clipboard
        navigator.clipboard.writeText(lastAnswer.toString()).then(() => {
            console.log('Result copied to clipboard');
            const message = document.createElement('div');
            message.textContent = 'Copied!';
            message.style.position = 'absolute';
            message.style.top = '10px';
            message.style.right = '10px';
            message.style.backgroundColor = 'green';
            message.style.color = 'white';
            message.style.padding = '5px 10px';
            message.style.borderRadius = '5px';
            document.body.appendChild(message);
            setTimeout(() => {
                document.body.removeChild(message);
            }, 1000);
        }, (err) => {
            console.error('Failed to copy result: ', err);
        });
        //Added feature: Clear history button functionality
        const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
        clearHistoryButton.addEventListener('click', () => {
            historyDisplay.innerHTML = ''; // Clear history display
        });
    }
    catch (error) {
        display.value = 'Error';
    }
});
