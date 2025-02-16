// ... (Existing code)
//10乗
document.getElementById('powerOfTen')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(num, 10).toString();
        display.value = currentInput;
    }
});