// ... (Existing code)
//2のx乗
document.getElementById('two-to-the-x')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(2, num).toString();
        display.value = currentInput;
    }
});
// 立方根
document.getElementById('cube-root')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.cbrt(num).toString();
        display.value = currentInput;
    }
});
