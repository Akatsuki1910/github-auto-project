// ... (Existing code)
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;

clearHistoryButton.addEventListener('click', () => {
    historyDisplay.innerHTML = '';
    localStorage.removeItem('calculatorHistory');
});

const keyboardInputToggle = document.getElementById('keyboard-input-toggle') as HTMLButtonElement;
let keyboardInputEnabled = false;

keyboardInputToggle.addEventListener('click', () => {
    keyboardInputEnabled = !keyboardInputEnabled;
    keyboardInputToggle.textContent = keyboardInputEnabled ? 'Disable Keyboard Input' : 'Enable Keyboard Input';
});

const openNewWindowButton = document.getElementById('open-new-window') as HTMLButtonElement;

openNewWindowButton.addEventListener('click', () => {
  window.open(window.location.href, '_blank');
});

// ... (Rest of existing code)