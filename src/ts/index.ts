// ... (Existing code)
//6乗
document.getElementById('powerOfSix')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.pow(num, 6).toString();
        display.value = currentInput;
    }
});