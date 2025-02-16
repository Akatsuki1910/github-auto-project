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
    // ... (Existing factorial code)
});
// 円周率πの入力機能
// ... (Existing pi code)
// sin関数機能
// ... (Existing sin code)
// cos関数機能
// ... (Existing cos code)
// tan関数機能
// ... (Existing tan code)
// log関数機能
// ... (Existing log code)
// 指数関数機能
// ... (Existing exp code)
// 絶対値機能
// ... (Existing abs code)
// 二乗機能
document.getElementById('square')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        alert('Invalid input');
        return;
    }
    display.value = (num * num).toString();
});