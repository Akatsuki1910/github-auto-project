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