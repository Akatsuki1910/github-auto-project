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