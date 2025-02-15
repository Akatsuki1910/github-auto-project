// ... (Existing code)
//4乗
document.getElementById('powerOfFour')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(num, 4).toString();
        display.value = currentInput;
    }
});