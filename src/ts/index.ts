// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const signChangeButton = document.getElementById('sign-change');
const historyDisplay = document.getElementById('history-display');
const historyButton = document.getElementById('history');
const clearLastHistoryButton = document.getElementById('clear-last-history');
let history: string[] = [];

// ... (Existing event listeners)
signChangeButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});

historyButton?.addEventListener('click', () => {
    if (historyDisplay) {
        historyDisplay.innerHTML = history.join('<br>');
        historyDisplay.style.display = 'block';
    }
});

clearLastHistoryButton?.addEventListener('click', () => {
    history.pop();
    if (historyDisplay) {
        historyDisplay.innerHTML = history.join('<br>');
    }
});

// ... (Rest of the existing code)