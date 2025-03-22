// ... (Existing code)
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
    if (/^[+\-*/]$/.test(key)) {
        display.value += key;
    }
    if (key === 'Enter') {
        equalsButton.click();
    }
    if (key === 'Backspace') {
        backspaceButton.click();
    }
    if (key === 'Escape') { // Added Escape key functionality to clear the display
        display.value = '0';
    }
    if (key === 'c' || key === 'C') { // Clear display with 'c' or 'C' key
        clearButton.click();
    }
});
const toggleDateTimeButton = document.getElementById('toggle-date-time') as HTMLButtonElement;
toggleDateTimeButton.addEventListener('click', () => {
    currentDateTimeDisplay.style.display = currentDateTimeDisplay.style.display === 'none' ? 'block' : 'none';
});
//Added current date and time display
const currentDateTimeDisplay = document.getElementById('current-date-time') as HTMLDivElement;
function updateDateTime() {
    const now = new Date();
    currentDateTimeDisplay.textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const expression = display.value;
        const result = eval(display.value); // Use eval for simplicity, but consider using a safer method
        display.value = result.toString();
        currentExpressionDisplay.textContent = expression + '=';
        const historyItem = `<p>${expression} = ${result}</p>`;
        historyDisplay.innerHTML += historyItem;
        // Store history in localStorage
        let history = localStorage.getItem('calculatorHistory') || '';
        history += historyItem;
        localStorage.setItem('calculatorHistory', history);
        historyDisplay.innerHTML = history; // Update history display
    }
    catch (error) {
        display.value = 'Error';
    }
});
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
    historyDisplay.textContent = '';
    localStorage.removeItem('calculatorHistory');
});
window.addEventListener('load', () => {
    const history = localStorage.getItem('calculatorHistory') || '';
    historyDisplay.innerHTML = history;
});
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
    display.value = '0';
    currentExpressionDisplay.textContent = '';
});
const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
const body = document.body;
toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-scheme');
    body.classList.toggle('light-scheme');
});
// Added functionality: Double click on history item to copy to display
historyDisplay.addEventListener('dblclick', (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'P') {
        const expression = target.textContent?.split('=')[0]?.trim();
        if (expression) {
            display.value = expression;
        }
    }
});
const percentButton = document.getElementById('percent') as HTMLButtonElement;
percentButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const percentageValue = currentValue / 100;
        display.value = percentageValue.toString();
    }
    catch (error) {
        display.value = 'Error';
    }
});
// Added: Clear button functionality (CE)
const clearButton = document.getElementById('clear') as HTMLButtonElement;
clearButton.addEventListener('click', () => {
    display.value = '0';
});