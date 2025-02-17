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
// Swap機能
document.getElementById('swap')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value.length >= 2) {
        display.value = display.value.slice(-2) + display.value.slice(0, -2);
    }
});