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