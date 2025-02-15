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
// ... (Rest of the code)