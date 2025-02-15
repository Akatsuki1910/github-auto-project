// ... (Existing code)
//Sign function
document.getElementById('sign')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    currentInput = (-num).toString();
    display.value = currentInput;
});
// Absolute function
document.getElementById('abs')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    currentInput = Math.abs(num).toString();
    display.value = currentInput;
});
//Exponential function
document.getElementById('exp')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    currentInput = Math.exp(num).toString();
    display.value = currentInput;
});
//Natural Logarithm
document.getElementById('ln')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    currentInput = Math.log(num).toString();
    display.value = currentInput;
});
// ... (Rest of the code)