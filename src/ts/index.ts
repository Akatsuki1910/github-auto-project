// ... (Existing code)
//Added Feature: Logarithm
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    display.value += 'Math.log10('; // Using base-10 logarithm
    currentExpression += 'log('; // Displaying 'log' on current expression
    currentExpressionDisplay.textContent = currentExpression;
});

// Added Feature: Exponential
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    display.value += 'Math.exp('; // Exponential function
    currentExpression += 'exp('; // Displaying 'exp' on current expression
    currentExpressionDisplay.textContent = currentExpression;
});

// ... (Rest of the existing code)