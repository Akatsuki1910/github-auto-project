// ... (Existing code)
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
// 追加機能：現在の式をクリアするボタン
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
clearEntryButton.addEventListener('click', () => {
    currentExpression = '';
    currentExpressionDisplay.textContent = '';
});
// 新機能：直前の計算結果をAns変数に格納
let lastAnswer = 0;
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton?.addEventListener('click', () => {
    try {
        lastAnswer = eval(currentExpression);
        display.value = lastAnswer.toString();
        // 計算履歴の表示機能を追加
        const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
        const newHistoryEntry = document.createElement('p');
        newHistoryEntry.textContent = currentExpression + ' = ' + display.value;
        historyDisplay.prepend(newHistoryEntry);

        // 履歴をlocalStorageに保存
        let history = JSON.parse(localStorage.getItem('calculatorHistory') || '[]');
        history.push(newHistoryEntry.textContent);
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
                // 履歴件数が10件を超えたら古いものから削除
        if (history.length > 10) {
            history.shift();  // 先頭の要素を削除
            localStorage.setItem('calculatorHistory', JSON.stringify(history));
            // historyDisplayの古い履歴も削除
            historyDisplay.removeChild(historyDisplay.lastChild as Node);
        }
    }
    catch (e) {
        display.value = 'Error';
    }
});
// ... (rest of the code)