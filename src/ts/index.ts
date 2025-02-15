// ... (Existing code)
//Sum all digits
document.getElementById('sum')?.addEventListener('click', () => {
    let sum = 0;
    for (let i = 0; i < currentInput.length; i++) {
        const digit = parseInt(currentInput[i]);
        if (!isNaN(digit)) {
            sum += digit;
        }
    }
    currentInput += sum.toString();
    display.value = currentInput;
});
// ... (Rest of the code)