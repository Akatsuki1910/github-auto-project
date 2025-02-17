// ... (Existing code)
// 3倍にする機能
document.getElementById('triple')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Error";
    }
    else {
        display.value = (num * 3).toString();
    }
});