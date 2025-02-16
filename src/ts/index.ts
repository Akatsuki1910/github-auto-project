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
//200%の計算機能追加
document.getElementById('calculate-200-percent')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = (num * 2).toString();
        display.value = currentInput;
    }
});
//50%の計算機能追加
document.getElementById('calculate-50-percent')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = (num * 0.5).toString();
        display.value = currentInput;
    }
});
//10%の計算機能追加
document.getElementById('calculate-10-percent')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = (num * 0.1).toString();
        display.value = currentInput;
    }
});
//1%の計算機能追加
document.getElementById('calculate-1-percent')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = (num * 0.01).toString();
        display.value = currentInput;
    }
});
//5%の計算機能追加
document.getElementById('calculate-5-percent')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = (num * 0.05).toString();
        display.value = currentInput;
    }
});