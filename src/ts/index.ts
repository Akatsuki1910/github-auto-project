// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];
const currentDateDisplay = document.getElementById('current-date-display') as HTMLDivElement;
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

// Remove Filter
const removeFilterButton = document.getElementById('remove-filter') as HTMLButtonElement;
removeFilterButton.addEventListener('click', () => {
  document.body.style.filter = 'none';
  dropShadowValue = 0; // Reset drop shadow value
});

//Show Date
const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
const toggleCurrentDateDisplayButton = document.getElementById('toggle-current-date-display') as HTMLButtonElement;
let currentDateDisplayVisible = false;

toggleCurrentDateDisplayButton.addEventListener('click', () => {
    currentDateDisplayVisible = !currentDateDisplayVisible;
    if (currentDateDisplayVisible) {
        currentDateDisplay.style.display = 'block';
        currentDateDisplay.textContent = new Date().toLocaleString();
    } else {
        currentDateDisplay.style.display = 'none';
    }
});

currentDateButton.addEventListener('click',()=>{
    display.value = new Date().toLocaleString();
});
