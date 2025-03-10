// ... (Existing code)
const parenthesesOpenButton = document.getElementById('parentheses-open') as HTMLButtonElement;
parenthesesOpenButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += '(';
});
const parenthesesCloseButton = document.getElementById('parentheses-close') as HTMLButtonElement;
parenthesesCloseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += ')';
});
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
clearEntryButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = '';
});
//Added Feature: Calculate button
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        display.value = eval(display.value);
    }
    catch (e) {
        display.value = "Error";
    }
});
//Added Feature: History
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history = [];
equalsButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    history.push(display.value);
    historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join('');
});
//Added Feature: Theme Toggle
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
});
//Added Feature: Current Expression Display
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
const operators = ['+', '-', '*', '/', '√', '%', 'x²', 'x³', 'x!', '1/x', 'xʸ', 'log', 'sin', 'cos', 'tan', 'abs', 'round', 'sign', 'exp', 'floor', 'rand', 'e', '10ˣ', 'mod'];
document.querySelectorAll('.digit, .operator, .decimal').forEach(button => {
    button.addEventListener('click', () => {
        currentExpressionDisplay.textContent += button.textContent;
    });
});
//Added Feature: Backspace
const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
backspaceButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = display.value.slice(0, -1);
});
//Added Feature: Memory
let memoryValue = 0;
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
memoryStoreButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue = parseFloat(display.value);
});
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement; // Added Feature: Memory Recall
memoryRecallButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = memoryValue.toString();
});
//Added Feature: Negate
const negateButton = document.getElementById('negate') as HTMLButtonElement;
negateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = (parseFloat(display.value) * -1).toString();
});
