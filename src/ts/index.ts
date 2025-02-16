// ... (Existing code)
// メモリ機能
let memory: number = 0;
document.getElementById('memory-store')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        alert('Invalid input');
        return;
    }
    memory = num;
});
// メモリ呼び出し機能
document.getElementById('memory-recall')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = memory.toString();
});
// 符号関数機能
document.getElementById('sign')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        alert('Invalid input');
        return;
    }
    display.value = Math.sign(num).toString();
});
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
// 逆数機能
document.getElementById('inverse')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        alert('Invalid input');
        return;
    }
    if (num === 0) {
        alert('Cannot divide by zero');
        return;
    }
    display.value = (1 / num).toString();
});
// 乱数機能
document.getElementById('rand')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.random().toString();
});
// 切り捨て機能
document.getElementById('floor')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        alert('Invalid input');
        return;
    }
    display.value = Math.floor(num).toString();
});
