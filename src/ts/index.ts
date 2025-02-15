// ... (Existing code)
//Ceiling function
document.getElementById('ceil')?.addEventListener('click', () => {
    currentInput = Math.ceil(parseFloat(currentInput)).toString();
    display.value = currentInput;
});
//Floor function
document.getElementById('floor')?.addEventListener('click', () => {
    currentInput = Math.floor(parseFloat(currentInput)).toString();
    display.value = currentInput;
});
//Random Number Generator
document.getElementById('rand')?.addEventListener('click', () => {
    currentInput = Math.random().toString();
    display.value = currentInput;
});
//Max function
document.getElementById('max')?.addEventListener('click', () => {
    const numbers = currentInput.split(',').map(Number);
    currentInput = Math.max(...numbers).toString();
    display.value = currentInput;
});
//Min function
document.getElementById('min')?.addEventListener('click', () => {
    const numbers = currentInput.split(',').map(Number);
    currentInput = Math.min(...numbers).toString();
    display.value = currentInput;
});
// ... (Rest of the code)