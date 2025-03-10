// ... (Existing code)
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
});
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    if (display.value) {
        navigator.clipboard.writeText(display.value);
        duplicateButton.style.backgroundColor = 'lightblue';
        setTimeout(() => {
            duplicateButton.style.backgroundColor = '';
        }, 200);
    }
});
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let currentExpression = '';
const operators = ['+', '-', '*', '/', '%', '√', 'x²', 'x³', 'xʸ', 'log', 'sin', 'cos', 'tan', 'abs', 'round', 'sign', 'exp', 'floor', 'rand', 'e', '10^x', 'mod'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
document.querySelectorAll('.digit, .operator, .decimal').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        currentExpression += value;
        currentExpressionDisplay.textContent = currentExpression;
    });
});
equalsButton.addEventListener('click', () => {
    try {
        currentExpression = currentExpression.replace(/([0-9]+)!/g, (_, num) => factorial(parseInt(num)));
        const result = eval(currentExpression);
        display.value = result.toString();
        currentExpression = '';
        currentExpressionDisplay.textContent = '';
        lastAnswer = result.toString();
        const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
        const historyItem = document.createElement('p');
        historyItem.textContent = `${currentExpression}=${result}`;
        historyDisplay.prepend(historyItem);
    }
    catch (error) {
        display.value = 'Error';
    }
});
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
// ... (rest of the code)