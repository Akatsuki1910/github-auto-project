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
const currentTimeButton = document.getElementById('current-time') as HTMLButtonElement;currentTimeButton.addEventListener('click', () => {display.value = new Date().toLocaleTimeString();});
//Show Year
const currentYearButton = document.getElementById('current-year') as HTMLButtonElement;currentYearButton.addEventListener('click',() =>{display.value = new Date().getFullYear().toString();});
//Show Month
const currentMonthButton = document.getElementById('current-month') as HTMLButtonElement;currentMonthButton.addEventListener('click', () => {display.value = (new Date().getMonth() + 1).toString();});
//Added Month Name
const currentMonthNameButton = document.getElementById('current-month-name') as HTMLButtonElement;
currentMonthNameButton.addEventListener('click', () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    display.value = monthNames[new Date().getMonth()];
});
//Show Day
const currentDayButton = document.getElementById('current-day') as HTMLButtonElement;currentDayButton.addEventListener('click', () => {display.value = new Date().getDate().toString();});
//Show Week
const currentWeekButton = document.getElementById('current-week') as HTMLButtonElement;currentWeekButton.addEventListener('click', () => {const today = new Date();const firstDayOfYear = new Date(today.getFullYear(), 0, 1);const pastDaysOfYear = (today.getTime() - firstDayOfYear.getTime()) / 86400000;display.value = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7).toString();});
//Show Seconds
const currentSecondsButton = document.getElementById('current-seconds') as HTMLButtonElement;currentSecondsButton.addEventListener('click', () => {display.value = new Date().getSeconds().toString();});
//Show Milliseconds
const currentMillisecondsButton = document.getElementById('current-milliseconds') as HTMLButtonElement;currentMillisecondsButton.addEventListener('click', () => {display.value = new Date().getMilliseconds().toString();});
//Show Minutes
const currentMinutesButton = document.getElementById('current-minutes') as HTMLButtonElement;currentMinutesButton.addEventListener('click', () => {display.value = new Date().getMinutes().toString();});
//Show Hour
const currentHourButton = document.getElementById('current-hour') as HTMLButtonElement;currentHourButton.addEventListener('click', () => {display.value = new Date().getHours().toString();});
// Show Day of Year
const currentDayOfYearButton = document.getElementById('current-day-of-year') as HTMLButtonElement;currentDayOfYearButton.addEventListener('click', () => {const now = new Date();const start = new Date(now.getFullYear(), 0, 0);const diff = now.getTime() - start.getTime();const oneDay = 1000 * 60 * 60 * 24;const dayOfYear = Math.floor(diff / oneDay);display.value = dayOfYear.toString();});
//Show Timestamp
const currentTimestampButton = document.getElementById('current-timestamp') as HTMLButtonElement;currentTimestampButton.addEventListener('click', () => {display.value = Date.now().toString();});
//Show Day of Week
const currentDayOfWeekButton = document.getElementById('current-day-of-week') as HTMLButtonElement;currentDayOfWeekButton.addEventListener('click', () => {const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];display.value = weekday[new Date().getDay()];});
//Show GMT Date
const currentGMTDateButton = document.getElementById('current-gmt-date') as HTMLButtonElement;
currentGMTDateButton.addEventListener('click', () => {
    display.value = new Date().toUTCString();
});
//Show Timezone Offset
const currentTimezoneOffsetButton = document.getElementById('current-timezone-offset') as HTMLButtonElement;
currentTimezoneOffsetButton.addEventListener('click', () => {
    display.value = new Date().getTimezoneOffset().toString();
});
// Clear All button functionality
const clearAllButton = document.getElementById('clear-all') as HTMLButtonElement;
clearAllButton.addEventListener('click', () => {
    display.value = '';
    currentExpression = '';
    currentExpressionDisplay.textContent = '';
    history = [];
    historyDisplay.innerHTML = '';
    memoryValue = 0;
    lastAnswer = 0;
});
// Nanoseconds
const currentNanosecondsButton = document.getElementById('current-nanoseconds') as HTMLButtonElement;
currentNanosecondsButton.addEventListener('click',()=>{
const hrTime = process.hrtime();
display.value = hrTime[1].toString();
});
//Microseconds
const currentMicrosecondsButton = document.getElementById('current-microseconds') as HTMLButtonElement;
currentMicrosecondsButton.addEventListener('click', () => {
    display.value = new Date().getMilliseconds()*1000 + "us";
});
// Date and Time
const currentDateTimeButton = document.getElementById('current-date-time') as HTMLButtonElement;
currentDateTimeButton.addEventListener('click', () => {
  display.value = new Date().toLocaleString();
});
//Local Date and Time
const currentLocalDateTimeButton = document.getElementById('current-local-date-time') as HTMLButtonElement;
currentLocalDateTimeButton.addEventListener('click', () => {
    const now = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    display.value = now.toLocaleString(undefined, options);
});
// Get Quarter
const currentQuarterButton = document.getElementById('current-quarter') as HTMLButtonElement;
currentQuarterButton.addEventListener('click', () => {
  const quarter = Math.floor((new Date().getMonth() / 3) + 1);
  display.value = quarter.toString();
});
