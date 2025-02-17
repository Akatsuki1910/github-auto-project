// ... (Existing code)
// 平均値を求める
document.getElementById('average')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const nums = display.value.split(',').map(Number);
    if (nums.some(isNaN)) {
        display.value = "Error";
    }
    else {
        display.value = (nums.reduce((a, b) => a + b) / nums.length).toString();
    }
});