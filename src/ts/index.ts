// ... (Existing code)
//Logarithm base 10
document.getElementById('log10')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    currentInput = Math.log10(num).toString();
    display.value = currentInput;
});
// ... (Rest of the code)