// ... (Existing code)
// n乗根
document.getElementById('nth-root')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        pendingOperator = 'n√x';
        firstOperand = num;
        currentInput = '';
    }
});
// 10のべき乗
document.getElementById('powerOfTen')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(10, num).toString();
        display.value = currentInput;
    }
});
// 剰余演算
document.getElementById('mod')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        pendingOperator = '%';
        firstOperand = num;
        currentInput = '';
    }
});
// 切り捨て
document.getElementById('trunc')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.trunc(num).toString();
        display.value = currentInput;
    }
});