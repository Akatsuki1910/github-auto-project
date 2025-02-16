// ... (Existing code)
let currentInput = '';
const display = document.getElementById('display') as HTMLInputElement;
//10乗
document.getElementById('powerOfTen')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(num, 10).toString();
        display.value = currentInput;
    }
});
//履歴クリア機能追加
document.getElementById('clear-history')?.addEventListener('click', () => {
    const history = document.getElementById('history');
    if (history) {
        history.innerHTML = '';
    }
});
