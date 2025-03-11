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
// ... (Existing toggleKeyboardButton code)

// Toggle Display Always On
// ... (Existing toggleDisplayAlwaysOnButton code)

// Toggle Dark Mode
const toggleDarkModeButton = document.getElementById('toggle-dark-mode') as HTMLButtonElement;
let darkMode = false;
toggleDarkModeButton.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-scheme', darkMode);
    document.body.classList.toggle('light-scheme', !darkMode);
});