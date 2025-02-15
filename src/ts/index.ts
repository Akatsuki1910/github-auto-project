// ... (Existing code)
//5乗
document.getElementById('powerOfFive')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(num, 5).toString();
        display.value = currentInput;
    }
});