// ... (Existing code)
//100%にする計算
document.getElementById('calculate-100-percent')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = (num*100).toString();
        display.value = currentInput;
    }
});
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
// x mod y
document.getElementById('calculate-x-mod-y')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        operator = 'mod';
        firstOperand = num;
        currentInput = '';
        display.value = currentInput; // Clear the display after operation is clicked.
    }
});
if (operator === 'mod') {
    result = firstOperand % num;
}