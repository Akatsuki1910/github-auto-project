// ... (Existing code)
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