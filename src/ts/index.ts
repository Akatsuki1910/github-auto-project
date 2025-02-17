// ... (Existing code)
// 最小値を求める
document.getElementById('min')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const nums = display.value.split(',').map(Number);
    if (nums.some(isNaN)) {
        display.value = "Error";
    }
    else {
        display.value = Math.min(...nums).toString();
    }
});
// 合計値を求める
document.getElementById('sum')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const nums = display.value.split('+').map(Number);
    if (nums.some(isNaN)) {
        display.value = "Error";
    }
    else {
        display.value = nums.reduce((a, b) => a + b).toString();
    }
});
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