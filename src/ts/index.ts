// ... (Existing code)
//Ceiling function
document.getElementById('ceil')?.addEventListener('click', () => {
    currentInput = Math.ceil(parseFloat(currentInput)).toString();
    display.value = currentInput;
});

// ... (Rest of the code)