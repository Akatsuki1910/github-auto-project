// ... (Existing code)
// Calculate Exponent (x^e)
const calculateExponentButton = document.getElementById('calculateExponent') as HTMLButtonElement;
calculateExponentButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.exp(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = display.value;
    }
});

// ... (Rest of the existing code)