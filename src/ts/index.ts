// ... (Existing code)
let angleMode = 'deg'; // Initial angle mode
const degRadButton = document.getElementById('deg-rad') as HTMLButtonElement;
degRadButton.addEventListener('click', () => {
    angleMode = angleMode === 'deg' ? 'rad' : 'deg';
    degRadButton.textContent = angleMode.toUpperCase();
});
// ... other event listeners
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        // Convert to radians if necessary
        const expression = angleMode === 'rad' ? display.value : display.value.replace(/sin|cos|tan|asin|acos|atan/g, (match) => match + 'r');
        const result = math.evaluate(expression);
        display.value = result.toString();
        // Added feature: Store result in Ans button
        const ansButton = document.getElementById('ans') as HTMLButtonElement;
        ansButton.textContent = 'Ans (' + result.toString() + ')';
        ansButton.addEventListener('click', () => {
            display.value += result.toString();
        });
        history.push({ expression: display.value, result: result.toString() });
        updateHistoryDisplay();
        //Added Feature: Copy to clipboard
        navigator.clipboard.writeText(result.toString()).then(() => {
            console.log('Result copied to clipboard');
        });
        // Added feature: Current expression display
        const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
        if (currentExpressionDisplay) {
            currentExpressionDisplay.textContent = expression;
        }
        // Added Feature: Local Storage
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
        //Added Feature: vibrate on error
        navigator.vibrate(200);
    }
    catch (error) {
        display.value = "Error";
        //Added Feature: vibrate on error
        navigator.vibrate([100, 50, 100]);
    }
});
// ... other functions
// Retrieve history from localStorage on load
window.addEventListener('load', () => {
    const storedHistory = localStorage.getItem('calculatorHistory');
    if (storedHistory) {
        history = JSON.parse(storedHistory);
        updateHistoryDisplay();
    }
});