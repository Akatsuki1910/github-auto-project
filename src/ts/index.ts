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
    }
    catch (error) {
        display.value = 'Error';
    }
});