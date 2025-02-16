// ... (Existing code)
// 2乗機能
document.getElementById('power-of-two')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        alert('Invalid input');
        return;
    }
    display.value = (num * num).toString();
});
// 剰余機能
document.getElementById('mod')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = '0';
        return;
    }
    // 剰余を求めるには2つ目の値が必要なので、仮に2で割る
    display.value = (currentValue % 2).toString();
});