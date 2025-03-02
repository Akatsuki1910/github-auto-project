// ... (Existing code)

//Added feature: Toggle Error Messages
// ... existing code

// Add other functionalities
// ... existing code

//Added Scientific Notation Toggle
// ... existing code

// Added Deg/Rad toggle functionality
// ... existing code

const display = document.getElementById('display') as HTMLInputElement;

// ... other code

//Added Fixed Decimal Toggle
let fixedDecimal = false;
let decimalPlaces = 2; // Default decimal places
const toggleFixedDecimalButton = document.getElementById('toggle-fixed-decimal') as HTMLButtonElement;
toggleFixedDecimalButton.addEventListener('click', () => {
    fixedDecimal = !fixedDecimal;
    if (fixedDecimal) {
        if (display.value) {
            display.value = Number(display.value).toFixed(decimalPlaces);
        }
    } else {
        if (display.value) {
            display.value = Number(display.value).toString();
        }
    }
});

//Added Input History Toggle
const inputHistory: string[] = [];
let inputHistoryIndex = -1;
const toggleInputHistoryButton = document.getElementById('toggle-input-history') as HTMLButtonElement;
toggleInputHistoryButton.addEventListener('click', () => {
    inputHistoryIndex = (inputHistoryIndex + 1) % inputHistory.length;
    if (inputHistory.length > 0) {
        display.value = inputHistory[inputHistoryIndex];
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        inputHistory.push(display.value);
        inputHistoryIndex = -1;
    }
});

// Added current date functionality
const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
currentDateButton.addEventListener('click', () => {
  const today = new Date();
  const dateString = today.toLocaleDateString();
  display.value = dateString; 
});

// Added clear history functionality
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
    inputHistory.length = 0; // Clear the history array
    inputHistoryIndex = -1; // Reset the history index
});

//Added copy to clipboard functionality
const copyToClipboardButton = document.getElementById('copy-to-clipboard') as HTMLButtonElement;
copyToClipboardButton.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value).then(() => {
        // Optional: Provide feedback to the user
        console.log('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});