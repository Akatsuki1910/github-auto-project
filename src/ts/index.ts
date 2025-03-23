// ... (Existing code)
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const display = document.getElementById('display') as HTMLInputElement;
document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    try {
        const result = math.evaluate(display.value);
        display.value = result.toString();
    }
    catch (error) {
        display.value = 'Error';
    }
});
const backspaceButton = document.getElementById('backspace');
backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    display.value = '';
});
const negateButton = document.getElementById('negate');
negateButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (parseFloat(display.value) * -1).toString();
    }
});
const percentButton = document.getElementById('percent');
percentButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (parseFloat(display.value) / 100).toString();
    }
});
const piButton = document.getElementById('pi');
piButton.addEventListener('click', () => {
    display.value += Math.PI;
});
const factorialButton = document.getElementById('factorial');
factorialButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        if (Number.isInteger(num) && num >= 0) {
            display.value = math.factorial(num).toString();
        }
        else {
            display.value = 'Error';
        }
    }
});
const lnButton = document.getElementById('ln');
lnButton.addEventListener('click', () => {
    if (display.value) {
        display.value = math.log(parseFloat(display.value)).toString();
    }
});
const expButton = document.getElementById('exp');
expButton.addEventListener('click', () => {
    if (display.value) {
        display.value = math.exp(parseFloat(display.value)).toString();
    }
});
