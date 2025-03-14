// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];
// ... (Other existing code and functions)
// ... existing filters
//Absolute Value
// ... (Existing functions)
//Floor function
// ... existing code
// ... (Existing functions)
// ... existing buttons
const copyToClipboardButton = document.getElementById('copy-to-clipboard') as HTMLButtonElement;
copyToClipboardButton.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
const toggleScientificButton = document.getElementById('toggle-scientific') as HTMLButtonElement;
const scientificButtons = document.querySelectorAll('.scientific') as NodeListOf<HTMLButtonElement>;
scientificButtons.forEach(button => button.style.display = 'none');
toggleScientificButton.addEventListener('click', () => {
    scientificButtons.forEach(button => {
        button.style.display = button.style.display === 'none' ? 'inline-block' : 'none';
    });
});
const toggleCurrentExpressionButton = document.getElementById('toggle-current-expression') as HTMLButtonElement;
toggleCurrentExpressionButton.addEventListener('click', () => {
    const currentDisplay = currentExpressionDisplay.style.display;
    currentExpressionDisplay.style.display = currentDisplay === 'none' ? 'block' : 'none';
});
const toggleBasicOperatorsButton = document.getElementById('toggle-basic-operators') as HTMLButtonElement;
const basicOperatorButtons = document.querySelectorAll('.operator') as NodeListOf<HTMLButtonElement>;
toggleBasicOperatorsButton.addEventListener('click', () => {
  basicOperatorButtons.forEach(button => {
    button.style.display = button.style.display === 'none' ? 'inline-block' : 'none';
  });
});
const toggleMainPadButton = document.getElementById('toggle-main-pad') as HTMLButtonElement;
const mainPadButtons = document.querySelectorAll('.main-pad button') as NodeListOf<HTMLButtonElement>;
toggleMainPadButton.addEventListener('click', () => {
    mainPadButtons.forEach(button => {
        button.style.display = button.style.display === 'none' ? 'inline-block' : 'none';
    });
});
const toggleDarkModeButton = document.getElementById('toggle-dark-mode') as HTMLButtonElement;
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
});
// ... (Rest of the existing code)