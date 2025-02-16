// ... (Existing code)
// 新規ウィンドウを開く機能
document.getElementById('open-new-window')?.addEventListener('click', () => {
    window.open('https://www.example.com', '_blank');
});

// 現在時刻を表示する機能
document.getElementById('current-time')?.addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    alert(`Current Time: ${timeString}`);
});
// 現在日付を表示する機能
document.getElementById('current-date')?.addEventListener('click', () => {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    alert(`Current Date: ${dateString}`);
});
// 履歴クリア機能
document.getElementById('clear-history')?.addEventListener('click', () => {
    const historyDiv = document.getElementById('history');
    if (historyDiv) {
        historyDiv.innerHTML = '';
    }
});
// 階乗機能
document.getElementById('factorial')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    let num = parseInt(display.value);
    if (isNaN(num)) {
        alert('Invalid input');
        return;
    }
    if (num < 0) {
        alert('Factorial is not defined for negative numbers');
        return;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    display.value = result.toString();
});
// 円周率πの入力機能
document.getElementById('pi')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += Math.PI.toString();
});
// sin関数機能
document.getElementById('sin')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.sin(parseFloat(display.value)).toString();
});
// cos関数機能
document.getElementById('cos')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.cos(parseFloat(display.value)).toString();
});
