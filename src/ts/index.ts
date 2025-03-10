// ... (Existing code)
const clearAllHistoryButton = document.getElementById('clear-all-history') as HTMLButtonElement;
clearAllHistoryButton.addEventListener('click', () => {
    localStorage.removeItem('calculatorHistory');
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    historyDisplay.innerHTML = ''; // 履歴表示をクリア
});
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
});
const toggleScientificButton = document.getElementById('toggle-scientific') as HTMLButtonElement;
const calculatorContainer = document.getElementById('calculator') as HTMLDivElement;
toggleScientificButton.addEventListener('click', () => {
    calculatorContainer.classList.toggle('scientific-layout');
});
const resetButton = document.getElementById('reset') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
    display.value = '0';
    currentExpression = '';
    currentExpressionDisplay.textContent = '';
});
const copyToClipboardButton = document.getElementById('copy-to-clipboard') as HTMLButtonElement;
copyToClipboardButton.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value).then(() => {
        alert('Copied to clipboard: ' + display.value);
    }, (err) => {
        console.error('Could not copy text: ', err);
    });
});
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
clearEntryButton.addEventListener('click', () => {
    currentExpression = '';
    currentExpressionDisplay.textContent = '';
});
let lastAnswer = 0;
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton?.addEventListener('click', () => {
    try {
        lastAnswer = eval(currentExpression);
        display.value = lastAnswer.toString();
        const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
        const newHistoryEntry = document.createElement('p');
        newHistoryEntry.textContent = currentExpression + ' = ' + display.value;
        historyDisplay.prepend(newHistoryEntry);
        let history = JSON.parse(localStorage.getItem('calculatorHistory') || '[]');
        history.push(newHistoryEntry.textContent);
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
        if (history.length > 10) {
            history.shift();
            localStorage.setItem('calculatorHistory', JSON.stringify(history));
            historyDisplay.removeChild(historyDisplay.lastChild as Node);
        }
    }
    catch (e) {
        display.value = 'Error';
    }
});
// ... (rest of the code)