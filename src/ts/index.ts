// ... (Existing code)
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let currentExpression = '';
const operators = ['+', '-', '*', '/', '%', '√', 'x²', 'x³', 'xʸ', 'log', 'sin', 'cos', 'tan', 'abs', 'round', 'sign', 'exp', 'floor', 'rand', 'e', '10^x', 'mod'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Add event listeners for digit and operator buttons
document.querySelectorAll('.digit, .operator, .decimal').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        currentExpression += value;
        currentExpressionDisplay.textContent = currentExpression;
    });
});
equalsButton.addEventListener('click', () => {
    try {
        const result = eval(currentExpression);
        display.value = result.toString();
        currentExpression = '';
        currentExpressionDisplay.textContent = '';
        lastAnswer = result.toString();
    }
    catch (error) {
        display.value = 'Error';
    }
});
const switchLayoutButton = document.getElementById('switch-layout') as HTMLButtonElement;
switchLayoutButton.addEventListener('click', () => {
    const calculator = document.getElementById('calculator') as HTMLDivElement;
    calculator.classList.toggle('scientific-layout');
});
const lastAnswerButton = document.getElementById('last-answer') as HTMLButtonElement;
let lastAnswer = '';
lastAnswerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += lastAnswer;
});
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
    localStorage.setItem('theme', document.body.classList.contains('dark-scheme') ? 'dark' : 'light');
});
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-scheme');
        document.body.classList.remove('light-scheme');
    }
    else {
        document.body.classList.add('light-scheme');
        document.body.classList.remove('dark-scheme');
    }
});