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
const toggleLargeDisplayButton = document.getElementById('toggle-large-display') as HTMLButtonElement;
toggleLargeDisplayButton.addEventListener('click', () => {
    display.classList.toggle('large-display');
});
const toggleCurrentDateTimeButton = document.getElementById('toggle-current-date-time') as HTMLButtonElement;
let showingDateTime = false;
toggleCurrentDateTimeButton.addEventListener('click', () => {
    showingDateTime = !showingDateTime;
    if (showingDateTime) {
        const now = new Date();
        display.value = now.toLocaleString();
    }
});
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
memoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});
// ... existing functions for month, year, day, second, millisecond, minute, hour
const currentTimestampButton = document.getElementById('current-timestamp') as HTMLButtonElement;
currentTimestampButton.addEventListener('click', () => {
    const now = new Date();
    display.value = now.getTime().toString();
});
const toggleCurrentWeekButton = document.getElementById('toggle-current-week') as HTMLButtonElement;
toggleCurrentWeekButton.addEventListener('click', () => {
  const now = new Date();
  const onejan = new Date(now.getFullYear(), 0, 1);
  const weekNumber = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
  display.value = weekNumber.toString();
});
const currentYearDayButton = document.getElementById('current-year-day') as HTMLButtonElement;
currentYearDayButton.addEventListener('click', () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    display.value = day.toString();
});
const currentMonthDayButton = document.getElementById('current-month-day') as HTMLButtonElement;
currentMonthDayButton.addEventListener('click', () => {
    const now = new Date();
    display.value = now.getDate().toString();
});
const currentDayOfWeekButton = document.getElementById('current-day-of-week') as HTMLButtonElement;
currentDayOfWeekButton.addEventListener('click', () => {
    const now = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    display.value = weekday[now.getDay()];
});
const clearDisplayButton = document.getElementById('clear-display') as HTMLButtonElement;
clearDisplayButton.addEventListener('click', () => {
  display.value = '';
});
const invertButton = document.getElementById('invert') as HTMLButtonElement;
invertButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (1 / parseFloat(display.value)).toString();
    }
});
// ... (Rest of the existing code)
