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
//Added Month Name
const currentMonthNameButton = document.getElementById('current-month-name') as HTMLButtonElement;
currentMonthNameButton.addEventListener('click', () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    display.value = monthNames[new Date().getMonth()];
});
const currentSecondsButton = document.getElementById('show-current-seconds') as HTMLButtonElement;
currentSecondsButton.addEventListener('click', () => {
    display.value = new Date().getSeconds().toString();
});
const currentDayButton = document.getElementById('current-day') as HTMLButtonElement;
currentDayButton.addEventListener('click', () => {
  display.value = new Date().getDate().toString();
});
//Added Day Name
const currentDayNameButton = document.getElementById('current-day-name') as HTMLButtonElement;
currentDayNameButton.addEventListener('click', () => {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  display.value = dayNames[new Date().getDay()];
});
//Show Minutes
const currentMinutesButton = document.getElementById('current-minutes-button') as HTMLButtonElement;
currentMinutesButton.addEventListener('click',()=>{
    display.value = new Date().getMinutes().toString();
});
//Show Hour
const currentHourButton = document.getElementById('current-hour-button') as HTMLButtonElement;
currentHourButton.addEventListener('click', () => {
    display.value = new Date().getHours().toString();
});
//Added Week
const currentWeekButton = document.getElementById('current-week') as HTMLButtonElement;
currentWeekButton.addEventListener('click',() => {
    const startDate = new Date(new Date().getFullYear(), 0, 1);
    const diff = Math.abs(new Date().getTime() - startDate.getTime());
    const weekNumber = Math.ceil(diff / (1000 * 60 * 60 * 24 * 7));
    display.value = weekNumber.toString();
});

//Added current date and time
const currentDateTimeButton = document.getElementById('current-date-time') as HTMLButtonElement;
currentDateTimeButton.addEventListener('click', () => {
  const now = new Date();
  display.value = now.toLocaleString(); // Displays date and time
});
//Added Seconds Button
const currentSecondsRealButton = document.getElementById('current-seconds') as HTMLButtonElement;
currentSecondsRealButton.addEventListener('click', () => {
    display.value = new Date().getSeconds().toString();
});
//Added ISO Week Number
const currentISOWeekButton = document.getElementById('current-iso-week') as HTMLButtonElement;
currentISOWeekButton.addEventListener('click', () => {
  let date = new Date();
  let d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  let dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  let weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1)/7);
  display.value = weekNo.toString();
});
//Added Seconds Since Epoch
const currentSecondsSinceEpochButton = document.getElementById('current-seconds-since-epoch') as HTMLButtonElement;
currentSecondsSinceEpochButton.addEventListener('click', () => {
    display.value = Math.floor(Date.now()/1000).toString();
});
// ... (rest of the code)