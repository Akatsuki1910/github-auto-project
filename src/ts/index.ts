// ... (Existing code)
// 10のべき乗
document.getElementById('powerOfTen')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(10, num).toString();
        display.value = currentInput;
    }
});
// ... (Rest of the code)