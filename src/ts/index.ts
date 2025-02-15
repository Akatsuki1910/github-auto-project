// ... (Existing code)
//Inverse Tangent function
document.getElementById('atan')?.addEventListener('click', () => {
    currentInput = Math.atan(parseFloat(currentInput)).toString();
    display.value = currentInput;
});

// ... (Rest of the code)