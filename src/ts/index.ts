// ... (Existing code)
let angleMode = 'deg';
const degRadButton = document.getElementById('deg-rad') as HTMLButtonElement;
degRadButton.addEventListener('click', () => {
    angleMode = angleMode === 'deg' ? 'rad' : 'deg';
    degRadButton.textContent = angleMode.toUpperCase();
});
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const expression = angleMode === 'rad' ? display.value : display.value.replace(/sin|cos|tan|asin|acos|atan/g, (match) => match + 'r');
        const result = math.evaluate(expression);
        display.value = result.toString();
        const ansButton = document.getElementById('ans') as HTMLButtonElement;
        ansButton.textContent = 'Ans (' + result.toString() + ')';
        ansButton.addEventListener('click', () => {
            display.value += result.toString();
        });
        history.push({ expression: display.value, result: result.toString() });
        updateHistoryDisplay();
        navigator.clipboard.writeText(result.toString()).then(() => {
            console.log('Result copied to clipboard');
        });
        const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
        if (currentExpressionDisplay) {
            currentExpressionDisplay.textContent = expression;
        }
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
        navigator.vibrate(200);
        const toast = document.createElement('div');
        toast.textContent = 'Calculated!';
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.backgroundColor = '#4CAF50';
        toast.style.color = 'white';
        toast.style.padding = '10px 20px';
        toast.style.borderRadius = '5px';
        document.body.appendChild(toast);
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 2000);

        // Added Feature: Log calculation to console
        console.log(`Calculation performed: ${expression} = ${result}`);
    }
    catch (error) {
        display.value = "Error";
        navigator.vibrate([100, 50, 100]);
    }
});
window.addEventListener('load', () => {
    const storedHistory = localStorage.getItem('calculatorHistory');
    if (storedHistory) {
        history = JSON.parse(storedHistory);
        updateHistoryDisplay();
    }
});