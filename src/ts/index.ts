// ... (Existing code)
//Inverse Sine function
document.getElementById('asin')?.addEventListener('click', () => {
    currentInput = Math.asin(parseFloat(currentInput)).toString();
    display.value = currentInput;
});

// ... (Rest of the code)