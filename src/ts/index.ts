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
const fullscreenToggle = document.getElementById('fullscreen-toggle') as HTMLButtonElement;

fullscreenToggle.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});
const changeFontSizeButton = document.getElementById('change-font-size') as HTMLButtonElement;
let fontSize = 16;

changeFontSizeButton.addEventListener('click', () => {
  fontSize += 2;
  document.body.style.fontSize = fontSize + 'px';
});
// ... (Rest of existing code)