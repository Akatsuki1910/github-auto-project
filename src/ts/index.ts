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
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
});