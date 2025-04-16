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
        history.push({ expression: display.value, result: result.toString() });
        updateHistoryDisplay();
    } catch (error) {
        display.value = "Error";
    }
});
// ... other functions