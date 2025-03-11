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
    display.value = new Date().toLocaleString();
});
//Show Time
const currentTimeButton = document.getElementById('current-time') as HTMLButtonElement;
currentTimeButton.addEventListener('click', () => {
    display.value = new Date().toLocaleTimeString();
});
//Show Year
const currentYearButton = document.getElementById('current-year') as HTMLButtonElement;
currentYearButton.addEventListener('click',() =>{
    display.value = new Date().getFullYear().toString();
});
//Show Month
const currentMonthButton = document.getElementById('current-month') as HTMLButtonElement;
currentMonthButton.addEventListener('click', () => {
  display.value = (new Date().getMonth() + 1).toString(); // Month is 0-indexed
});
//Show Day
const currentDayButton = document.getElementById('current-day') as HTMLButtonElement;
currentDayButton.addEventListener('click', () => {
    display.value = new Date().getDate().toString();
});
//Show Week
const currentWeekButton = document.getElementById('current-week') as HTMLButtonElement;
currentWeekButton.addEventListener('click', () => {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today.getTime() - firstDayOfYear.getTime()) / 86400000;
    display.value = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7).toString();
});
//Show Seconds
const currentSecondsButton = document.getElementById('current-seconds') as HTMLButtonElement;
currentSecondsButton.addEventListener('click', () => {
    display.value = new Date().getSeconds().toString();
});
//Show Milliseconds
const currentMillisecondsButton = document.getElementById('current-milliseconds') as HTMLButtonElement;
currentMillisecondsButton.addEventListener('click', () => {
    display.value = new Date().getMilliseconds().toString();
});
//Show Minutes
const currentMinutesButton = document.getElementById('current-minutes') as HTMLButtonElement;
currentMinutesButton.addEventListener('click', () => {
  display.value = new Date().getMinutes().toString();
});