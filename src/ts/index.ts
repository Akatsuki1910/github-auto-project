// ... (Existing code)
// 1/2にする機能
document.getElementById('half')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Error";
    }
    else {
        display.value = (num * 0.5).toString();
    }
});
//リセット機能
document.getElementById('reset')?.addEventListener('click', () => {
    (document.getElementById('display') as HTMLInputElement).value = '';
    (document.getElementById('currentExpressionDisplay') as HTMLInputElement).innerText = '';
});
// Duplicate機能
document.getElementById('duplicate')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = display.value + display.value;
});