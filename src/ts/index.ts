// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
    display.value = '0';
    currentExpressionDisplay.textContent = '';
});

// ... (Other existing code)

//Added toggle history functionality
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const toggleHistoryButton = document.getElementById('toggle-history') as HTMLButtonElement;
toggleHistoryButton.addEventListener('click', () => {
    historyDisplay.style.display = historyDisplay.style.display === 'none' ? 'block' : 'none';
});
const copyButton = document.getElementById('copy') as HTMLButtonElement;
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value);
});

//Added Keyboard Support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/^[0-9]$/.test(key)) {
        display.value += key;
    }
    //Added keyboard support for operators
    if (/^[+\-*/]$/.test(key)) {
        display.value += key;
    }
    if (key === 'Enter') {
        equalsButton.click();
    }
});
//Added current date and time display
const currentDateTimeDisplay = document.getElementById('current-date-time') as HTMLDivElement;

function updateDateTime() {
    const now = new Date();
    currentDateTimeDisplay.textContent = now.toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime();
const toggleDateTimeButton = document.getElementById('toggle-date-time') as HTMLButtonElement;
toggleDateTimeButton.addEventListener('click', () => {
    currentDateTimeDisplay.style.display = currentDateTimeDisplay.style.display === 'none' ? 'block' : 'none';
});
//Added a simple expression evaluator
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        //Added history functionality
        const expression = display.value;
        const result = eval(display.value);
        display.value = result.toString();
        //Added current expression display
        currentExpressionDisplay.textContent = expression + '=';
        //Added history to display and local storage
        const historyItem = `<p>${expression} = ${result}</p>`;
        historyDisplay.innerHTML += historyItem;
        let history = localStorage.getItem('calculatorHistory') || '';
        history += historyItem;
        localStorage.setItem('calculatorHistory', history);
        historyDisplay.innerHTML = history;  // Update history display

    }
    catch (error) {
        display.value = 'Error';
    }
});
//Added clear history functionality
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
    historyDisplay.textContent = '';
    localStorage.removeItem('calculatorHistory');
});
// Load history from localStorage on page load
window.addEventListener('load', () => {
    const history = localStorage.getItem('calculatorHistory') || '';
    historyDisplay.innerHTML = history;
});
//Added backspace functionality
const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
//Added theme toggle functionality
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
const body = document.body;
toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-scheme');
    body.classList.toggle('light-scheme');
});