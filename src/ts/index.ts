// ... (Existing code)
let ans = 0;
const ansButton = document.getElementById('ans');
ansButton?.addEventListener('click', () => {
    display.value = ans.toString();
});
const equalsButton = document.querySelector('.equals');
equalsButton?.addEventListener('click', () => {
    try {
        ans = math.evaluate(display.value);
        display.value = ans.toString();
        // 計算結果を履歴に追加
        const historyItem = document.createElement('div');
        historyItem.textContent = `${display.value}`;
        const historyContainer = document.getElementById('currentExpressionDisplay');
        historyContainer?.appendChild(historyItem);
        // 履歴をsessionStorageに保存
        let history = sessionStorage.getItem('calculatorHistory') || '';
        history += `${display.value}\n`;
        sessionStorage.setItem('calculatorHistory', history);
        // 履歴表示を更新
        displayHistory();
    }
    catch (error) {
        display.value = 'Error';
    }
});
function displayHistory() {
    const historyContainer = document.getElementById('currentExpressionDisplay');
    historyContainer.innerHTML = ''; // 履歴表示をクリア
    const history = sessionStorage.getItem('calculatorHistory') || '';
    history.split('\n').forEach(item => {
        if (item) {
            const historyItem = document.createElement('div');
            historyItem.textContent = item;
            historyContainer.appendChild(historyItem);
        }
    });
}
displayHistory(); // 初期表示
// 履歴クリアボタンの追加
const clearHistoryButton = document.createElement('button');
clearHistoryButton.textContent = 'Clear History';
clearHistoryButton.addEventListener('click', () => {
    sessionStorage.removeItem('calculatorHistory');
    displayHistory();
});
document.body.appendChild(clearHistoryButton);