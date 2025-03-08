// ... (Existing code)
//Added Feature: Logarithm
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    display.value += 'Math.log10('; // Using base-10 logarithm
    currentExpression += 'log('; // Displaying 'log' on current expression
    currentExpressionDisplay.textContent = currentExpression;
});

// ... (Rest of the existing code)