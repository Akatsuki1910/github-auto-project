// ... (Existing code)
//Duplicate function
document.getElementById('duplicate')?.addEventListener('click', () => {
    currentInput = currentInput + currentInput;
    display.value = currentInput;
});
// ... (Rest of the code)