// ... (Existing code)
// 2のx乗機能
document.getElementById('two-to-the-power-x')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        alert('Invalid input');
        return;
    }
    display.value = Math.pow(2, num).toString();
});
// 立方根機能
document.getElementById('cube-root')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        alert('Invalid input');
        return;
    }
    display.value = Math.cbrt(num).toString();
});