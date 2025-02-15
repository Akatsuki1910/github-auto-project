// ... (Existing code)
// 符号反転
document.getElementById('sign-change')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = (-num).toString();
        display.value = currentInput;
    }
});