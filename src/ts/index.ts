// ... (Existing code)
let angleMode = 'deg';
let ans = 0;
document.getElementById('deg-rad')?.addEventListener('click', () => {
    angleMode = angleMode === 'deg' ? 'rad' : 'deg';
    display.value = angleMode;
});
const ansButton = document.getElementById('ans');
ansButton?.addEventListener('click', () => {
    display.value += ans.toString();
});
const display = document.getElementById('display');
const equalsButton = document.querySelector('.equals');
equalsButton?.addEventListener('click', () => {
    try {
        const result = math.evaluate(display.value);
        display.value = result.toString();
        ans = result;
        const historyItem = document.createElement('p');
        historyItem.textContent = `${display.value}`;
        const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
        currentExpressionDisplay?.appendChild(historyItem);
        // Added feature: Clear button for each history entry
        const clearEntryButton = document.createElement('button');
        clearEntryButton.textContent = 'Clear';
        clearEntryButton.addEventListener('click', () => {
            currentExpressionDisplay?.removeChild(historyItem);
            currentExpressionDisplay?.removeChild(clearEntryButton); // Remove itself
        });
        currentExpressionDisplay?.appendChild(clearEntryButton);
        navigator.clipboard.writeText(result.toString());
        let history = localStorage.getItem('calculatorHistory') ? JSON.parse(localStorage.getItem('calculatorHistory')) : [];
        const timestamp = new Date().toLocaleString();
        history.push({ expression: display.value, result: result.toString(), timestamp });
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
    }
    catch (error) {
        display.value = 'Error';
        let history = localStorage.getItem('calculatorHistory') ? JSON.parse(localStorage.getItem('calculatorHistory')) : [];
        const timestamp = new Date().toLocaleString();
        history.push({ expression: display.value, result: 'Error', timestamp, error: error.message });
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
    }
});
const clearAllButton = document.getElementById('clear-all');
clearAllButton?.addEventListener('click', () => {
    localStorage.removeItem('calculatorHistory');
});