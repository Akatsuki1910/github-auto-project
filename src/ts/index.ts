// ... (Existing code)
//3乗
document.getElementById('powerOfThree')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(num, 3).toString();
        display.value = currentInput;
    }
});