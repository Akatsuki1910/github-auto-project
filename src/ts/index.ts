// ... (Existing code)
//平方根
document.getElementById('square-root')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num) && num >= 0) {
        currentInput = Math.sqrt(num).toString();
        display.value = currentInput;
    }
});