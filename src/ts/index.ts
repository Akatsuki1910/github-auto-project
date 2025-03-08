// ... (Existing code)
//Added Feature: Degree/Radian Toggle
let isDegreeMode = true;
const degRadButton = document.getElementById('deg-rad') as HTMLButtonElement;
degRadButton.addEventListener('click', () => {
    isDegreeMode = !isDegreeMode;
    degRadButton.textContent = isDegreeMode ? 'Deg' : 'Rad';
});
const tanhButton = document.getElementById('tanh') as HTMLButtonElement;
tanhButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.tanh(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `tanh(${currentValue}) = ${result}`;
    }
});
//Added Feature: calculation history
const historyDisplay = document.getElementById('history-display');
const historyButton = document.getElementById('history');
const historyArr = [];
historyButton.addEventListener('click', () => {
    if (historyDisplay.style.display === 'none') {
        historyDisplay.style.display = 'block';
        historyDisplay.innerHTML = ''; // Clear previous history
        historyArr.forEach(item => {
            const p = document.createElement('p');
            p.textContent = item;
            historyDisplay.appendChild(p);
        });
    }
    else {
        historyDisplay.style.display = 'none';
    }
});
//Added Feature: Ans Button
let lastAnswer = 0;
const ansButton = document.getElementById('ans');
ansButton.addEventListener('click', () => {
    display.value += lastAnswer.toString();
});
//Added Feature: Theme Toggle
const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;
let isDark = false;
toggleThemeButton.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        body.classList.add('dark-scheme');
        body.classList.remove('light-scheme');
    }
    else {
        body.classList.remove('dark-scheme');
        body.classList.add('light-scheme');
    }
});
// Added Feature: Clear Entry (CE) button functionality
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
clearEntryButton.addEventListener('click', () => {
    display.value = '';
    currentExpressionDisplay.textContent = ''; // Clear current expression
});
//Added Feature: Parentheses
const parenthesesButton = document.getElementById('parentheses') as HTMLButtonElement;
let parenthesesCount = 0;
parenthesesButton.addEventListener('click', () => {
    if (parenthesesCount % 2 === 0) {
        display.value += '(';
    }
    else {
        display.value += ')';
    }
    parenthesesCount++;
});
//Added Feature: Keyboard Support for Digits and Operators
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/^[0-9]$/.test(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        display.value += key;
    }
    else if (key === 'Enter' || key === '=') {
        // Evaluate expression
        try {
            lastAnswer = eval(display.value);
            display.value = lastAnswer.toString();
            historyArr.push(display.value); //Add result to history
        }
        catch (error) {
            display.value = 'Error';
        }
    }
});