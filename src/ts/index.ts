// ... (Existing code)
//9乗
document.getElementById('powerOfNine')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(num, 9).toString();
        display.value = currentInput;
    }
});