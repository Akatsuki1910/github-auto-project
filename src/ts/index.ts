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

// ... existing filters

// Drop Shadow
const dropShadowButton = document.getElementById('drop-shadow') as HTMLButtonElement;
let dropShadowValue = 0;
dropShadowButton.addEventListener('click', () => {
    dropShadowValue += 5;
document.body.style.filter = `drop-shadow(${dropShadowValue}px ${dropShadowValue}px 5px rgba(0,0,0,0.5))`;
});