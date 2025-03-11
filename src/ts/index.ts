// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];

// ... (Other existing code)

//Added M+ button functionality
// ... (Existing functions)

// Added calculate expression functionality
// ... (Existing calculateExpressionButton)

// ... existing code for toggleHistoryDisplayButton, clearLastNumberButton, debugButton, toggleCurrentExpressionButton

// Toggle Keyboard Input
const toggleKeyboardButton = document.getElementById('toggle-keyboard') as HTMLButtonElement;
let keyboardInputEnabled = true;
toggleKeyboardButton.addEventListener('click', () => {
    keyboardInputEnabled = !keyboardInputEnabled;
    if (keyboardInputEnabled) {
        display.removeAttribute('readonly');
        toggleKeyboardButton.textContent = 'Disable Keyboard';
    } else {
        display.setAttribute('readonly', 'true');
        toggleKeyboardButton.textContent = 'Enable Keyboard';
    }
});