// ... (Existing code)
//Inverse Cosine function
document.getElementById('acos')?.addEventListener('click', () => {
    currentInput = Math.acos(parseFloat(currentInput)).toString();
    display.value = currentInput;
});

// ... (Rest of the code)