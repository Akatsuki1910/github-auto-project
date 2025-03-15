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
// ... existing toggle functions
// ... existing functions for month, year, day, second, millisecond, minute, hour, etc.
// ... existing functions
const currentScreenResolutionButton = document.getElementById('current-screen-resolution') as HTMLButtonElement;
currentScreenResolutionButton.addEventListener('click', () => {
    display.value = `${window.screen.width}x${window.screen.height}`;
});
const currentLanguageButton = document.getElementById('current-language') as HTMLButtonElement;
currentLanguageButton.addEventListener('click', () => {
    display.value = navigator.language;
});
// ... (Rest of the existing code)