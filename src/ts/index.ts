// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];

// ... (Other existing code)

// ... existing functions

// ... existing code for other buttons

// Toggle Hue Rotate
const toggleHueRotateButton = document.getElementById('toggle-hue-rotate') as HTMLButtonElement;
let hueRotation = 0;
toggleHueRotateButton.addEventListener('click', () => {
    hueRotation += 30;
    document.body.style.filter = `hue-rotate(${hueRotation}deg)`;
});

//Added screen brightness functionality
// ... other code