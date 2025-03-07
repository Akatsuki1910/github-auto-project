// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
// Calculate Exponent (x^e)
const calculateExponentButton = document.getElementById('calculateExponent') as HTMLButtonElement;
calculateExponentButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.exp(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `e^${currentValue} = ${result}`; // Show the expression
    }
});
//Logarithm
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.log10(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `log(${currentValue}) = ${result}`;
    }
});
const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
    display.value += Math.PI.toString();
});
// Factorial
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
factorialButton.addEventListener('click', () => {
    const currentValue = parseInt(display.value);
    if (!isNaN(currentValue)) {
        const result = factorial(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `${currentValue}! = ${result}`;
    }
});
// Basic Calculator Functions
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
digits.forEach(digit => {
    digit.addEventListener('click', () => {
        display.value += digit.textContent;
    });
});
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        display.value += operator.textContent;
    });
});
decimal.addEventListener('click', () => {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
});
equals.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
});
clear.addEventListener('click', () => {
    display.value = '';
});
deleteButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
// Toggle Theme
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
});