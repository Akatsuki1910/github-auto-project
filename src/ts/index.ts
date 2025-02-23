// ... (Existing code)

// ... (Existing functions)

// ... existing functions

// ... (Other existing functions)
const display = document.getElementById('display') as HTMLInputElement;
let isDegreeMode = true;
let ans = 0; // Store the last answer
let history: string[] = []; // History array to store calculations
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const additionalFunctions = document.querySelector('.additional-functions') as HTMLDivElement;
const mainPad = document.querySelector('.main-pad') as HTMLDivElement;
const scientificSection = document.querySelector('.scientific-section') as HTMLDivElement;
const memorySection = document.querySelector('.memory-section') as HTMLDivElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let currentExpression = '';
let isKeyboardEnabled = false;
let isNumpadEnabled = false; // Add flag for numpad

// ... (Existing Event Listeners)

document.getElementById('toggle-numpad')?.addEventListener('click', () => {
    isNumpadEnabled = !isNumpadEnabled;
    if (isNumpadEnabled) {
        document.addEventListener('keydown', handleNumpadInput);
    } else {
        document.removeEventListener('keydown', handleNumpadInput);
    }
});

function handleNumpadInput(event: KeyboardEvent) {
    const key = event.key;
    if (!isNaN(parseInt(key)) && event.location === KeyboardEvent.DOM_KEY_LOCATION_NUMPAD) {
        display.value += key;
    }
}

// ... (Rest of the existing code)