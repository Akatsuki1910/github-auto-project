// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const copyButton = document.getElementById('copy');
copyButton?.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value).then(() => {
        // Optional: Show a notification that the value was copied
        console.log('Copied to clipboard:', display.value);
    }, (err) => {
        console.error('Failed to copy: ', err);
    });
});
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
// テーマ切り替え機能の追加
const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;
let isDarkTheme = false;
toggleThemeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        body.classList.remove('light-scheme');
        body.classList.add('dark-scheme');
    }
    else {
        body.classList.remove('dark-scheme');
        body.classList.add('light-scheme');
    }
});
// 숫자 버튼 클릭 이벤트 추가
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});