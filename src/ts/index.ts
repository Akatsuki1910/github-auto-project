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
// 電卓の表示/非表示を切り替える機能
document.getElementById('toggle-visibility')?.addEventListener('click', () => {
    const calculator = document.getElementById('calculator');
    if (calculator) {
        calculator.style.display = calculator.style.display === 'none' ? 'block' : 'none';
    }
});
