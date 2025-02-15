// ... (Existing code)
let memoryValue = 0;
let ans = 0;
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
//Euler's number
document.getElementById('e')?.addEventListener('click', () => {
    currentInput += Math.E.toString();
    display.value = currentInput;
});
//Ans button
document.getElementById('ans')?.addEventListener('click', () => {
    currentInput += ans.toString();
    display.value = currentInput;
});
//Round function
document.getElementById('round')?.addEventListener('click', () => {
    currentInput = Math.round(parseFloat(currentInput)).toString();
    display.value = currentInput;
});
//Power of Two button
document.getElementById('powerOfTwo')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    currentInput = (num * num).toString();
    display.value = currentInput;
});
// ... (Rest of the code)
document.getElementById('equals')?.addEventListener('click', () => {
    try {
        ans = eval(currentInput);
        display.value = ans.toString();
        currentInput = ans.toString();
    }
    catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
});