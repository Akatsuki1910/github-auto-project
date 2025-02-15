// ... (Existing code)
let memoryValue = 0;
//Memory Store
document.getElementById('memory-store')?.addEventListener('click', () => {
    memoryValue = parseFloat(currentInput);
});
//Memory Recall
document.getElementById('memory-recall')?.addEventListener('click', () => {
    currentInput = memoryValue.toString();
    display.value = currentInput;
});
//Memory Clear
document.getElementById('memory-clear')?.addEventListener('click', () => {
    memoryValue = 0;
});
//Logarithm base 10
document.getElementById('log10')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    currentInput = Math.log10(num).toString();
    display.value = currentInput;
});
// ... (Rest of the code)