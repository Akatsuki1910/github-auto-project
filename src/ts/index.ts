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
        const clearHistoryButton = document.createElement('button');
        clearHistoryButton.textContent = 'Clear History';
        clearHistoryButton.addEventListener('click', () => {
            currentExpressionDisplay?.innerHTML = '';
        });
        currentExpressionDisplay?.appendChild(clearHistoryButton);
        navigator.clipboard.writeText(result.toString());
        let history = localStorage.getItem('calculatorHistory') ? JSON.parse(localStorage.getItem('calculatorHistory')) : [];
        const timestamp = new Date().toLocaleString();
        history.push({ expression: display.value, result: result.toString(), timestamp });
        localStorage.setItem('calculatorHistory', JSON.stringify(history));

        // Display history immediately after calculation
        const historyDiv = document.createElement('div');
        historyDiv.id = 'history';
        history.forEach(item => {
            const historyP = document.createElement('p');
            historyP.textContent = `${item.timestamp}: ${item.expression} = ${item.result}`;
            historyDiv.appendChild(historyP);
        });
        currentExpressionDisplay?.appendChild(historyDiv);
    }
    catch (error) {
        display.value = 'Error';
        let history = localStorage.getItem('calculatorHistory') ? JSON.parse(localStorage.getItem('calculatorHistory')) : [];
        const timestamp = new Date().toLocaleString();
        history.push({ expression: display.value, result: 'Error', timestamp, error: error.message });
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
    }
});
//Added feature: immediate history
const clearAllButton = document.getElementById('clear-all');
clearAllButton?.addEventListener('click', () => {
  localStorage.removeItem('calculatorHistory');
});