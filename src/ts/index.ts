// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const copyButton = document.getElementById('copy');
copyButton?.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value).then(() => {
        // Optional: Show a notification that the value was copied
        console.log('Copied to clipboard:', display.value);
    }, (err) => {
        console.error('Failed to copy: ', err);
    });
});
let ans = 0;
const ansButton = document.getElementById('ans');
ansButton?.addEventListener('click', () => {
    display.value = ans.toString();
});
const equalsButton = document.querySelector('.equals');
equalsButton?.addEventListener('click', () => {
    try {
        ans = math.evaluate(display.value);
        display.value = ans.toString();
        addToHistory(display.value);
        displayHistory();
    }
    catch (error) {
        display.value = 'Error';
    }
});
function displayHistory() {
    const historyContainer = document.getElementById('currentExpressionDisplay');
    historyContainer.innerHTML = ''; // Clear existing history before displaying new history
    const history = sessionStorage.getItem('calculatorHistory') || '';
    history.split('\n').forEach(item => {
        if (item) {
            const historyItem = document.createElement('div');
            historyItem.textContent = item;
            historyContainer.appendChild(historyItem);
        }
    });
}
displayHistory();
function addToHistory(value) {
    const history = sessionStorage.getItem('calculatorHistory') || '';
    sessionStorage.setItem('calculatorHistory', history + value + '\n');
}
const clearHistoryButton = document.createElement('button');
clearHistoryButton.textContent = 'Clear History';
clearHistoryButton.addEventListener('click', () => {
    sessionStorage.removeItem('calculatorHistory');
    displayHistory();
});
document.body.appendChild(clearHistoryButton);
const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;
let isDarkTheme = false;
toggleThemeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        body.classList.remove('light-scheme');
        body.classList.add('dark-scheme');
    }
    else {
        body.classList.remove('dark-scheme');
        body.classList.add('light-scheme');
    }
});
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});
document.getElementById('clear-all').addEventListener('click', () => {
    display.value = '';
});
// Backspace button functionality
document.getElementById('backspace').addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
document.getElementById('eval').addEventListener('click', () => {
    try {
        display.value = math.evaluate(display.value).toString();
        addToHistory(display.value); // Add evaluated result to history
    }
    catch (e) {
        display.value = "Error";
    }
});
const openParen = document.querySelector('.main-pad > button:nth-last-child(2)');
openParen.addEventListener('click', () => display.value += '(');
const closeParen = document.querySelector('.main-pad > button:last-child');
closeParen.addEventListener('click', () => display.value += ')');
//Added Percentage button functionality
const percentageButton = document.getElementById('percentage');
percentageButton?.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue / 100).toString();
    }
    catch (error) {
        display.value = 'Error';
    }
});
// Added memory functionality
let memory = 0;
document.getElementById('memory-store')?.addEventListener('click', () => {
    memory = parseFloat(display.value);
});
document.getElementById('memory-recall')?.addEventListener('click', () => {
    display.value += memory.toString();
});
document.getElementById('memory-clear')?.addEventListener('click', () => {
    memory = 0;
});
// Added negate button functionality
document.getElementById('negate')?.addEventListener('click', () => {
    display.value = (-parseFloat(display.value)).toString();
});
//Added Square root functionality
document.getElementById('sqrt')?.addEventListener('click', () => {
    display.value = Math.sqrt(parseFloat(display.value)).toString();
});
