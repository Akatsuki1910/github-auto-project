// ... (Existing code)
//8乗
document.getElementById('powerOfEight')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(num, 8).toString();
        display.value = currentInput;
    }
});