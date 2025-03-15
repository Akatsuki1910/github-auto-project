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
// ... existing functions
// ... (Existing functions)
const currentScreenResolutionButton = document.getElementById('current-screen-resolution') as HTMLButtonElement;
currentScreenResolutionButton.addEventListener('click', () => {
    display.value = `${window.screen.width}x${window.screen.height}`;
});
// ... (Other existing event listeners)
const currentClipboardContentButton = document.getElementById('current-clipboard-content') as HTMLButtonElement;
currentClipboardContentButton.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        display.value = text;
    } catch (err) {
        display.value = 'Failed to read clipboard';
        console.error('Failed to read clipboard:', err);
    }
});
const currentDevicePixelRatioButton = document.getElementById('current-device-pixel-ratio') as HTMLButtonElement;
currentDevicePixelRatioButton.addEventListener('click', () => {
    display.value = window.devicePixelRatio.toString();
});
const currentViewportWidthButton = document.getElementById('current-viewport-width') as HTMLButtonElement;
currentViewportWidthButton.addEventListener('click', () => {
  display.value = window.innerWidth.toString();
});
