// ... (Existing code)
//Tangent function
document.getElementById('tan')?.addEventListener('click', () => {
    currentInput = Math.tan(parseFloat(currentInput)).toString();
    display.value = currentInput;
});

// ... (Rest of the code)
