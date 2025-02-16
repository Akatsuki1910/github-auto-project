// ... (Existing code)
// 10のx乗機能
document.getElementById('ten-to-the-power-x')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        alert('Invalid input');
        return;
    }
    display.value = Math.pow(10, num).toString();
});