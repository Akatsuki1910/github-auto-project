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
// ... (Rest of the existing code)
