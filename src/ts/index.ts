// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];
const currentDateDisplay = document.getElementById('current-date-display') as HTMLDivElement;
// ... (Other existing code and functions)
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
display.value = new Date().toLocaleDateString();
});
//Show Time
const currentTimeButton = document.getElementById('current-time') as HTMLButtonElement;currentTimeButton.addEventListener('click', () => {display.value = new Date().toLocaleTimeString();});
//Show Year
const currentYearButton = document.getElementById('current-year') as HTMLButtonElement;currentYearButton.addEventListener('click',() =>{display.value = new Date().getFullYear().toString();});
//Show Month
const currentMonthButton = document.getElementById('current-month') as HTMLButtonElement;currentMonthButton.addEventListener('click', () => {display.value = (new Date().getMonth() + 1).toString();});
const currentWeekNumberButton = document.getElementById('current-week-number') as HTMLButtonElement;
currentWeekNumberButton.addEventListener('click', () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - startOfYear.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    const weekNumber = Math.ceil(diff / oneWeek);
    display.value = weekNumber.toString();
});