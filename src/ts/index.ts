// ... (Existing code)
//7乗
document.getElementById('powerOfSeven')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(num, 7).toString();
        display.value = currentInput;
    }
});