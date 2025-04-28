// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const signChangeButton = document.getElementById('sign-change');
const historyDisplay = document.getElementById('history-display');
const historyButton = document.getElementById('history');
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
// ... (Rest of the existing code)