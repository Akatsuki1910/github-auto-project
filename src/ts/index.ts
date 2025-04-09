// ... (Existing code)
const calculateMedianButton = document.getElementById('calculate-median') as HTMLButtonElement;
calculateMedianButton.addEventListener('click', () => {
    // ... (median calculation logic)
});

// ... other code ...

// ... (Rest of the code)
const currentUnixTimestampButton = document.getElementById('current-unix-timestamp') as HTMLButtonElement;
currentUnixTimestampButton.addEventListener('click', () => {
    display.value = Math.floor(Date.now() / 1000).toString();
});
const currentEpochTimeButton = document.getElementById('current-epoch-time') as HTMLButtonElement;
currentEpochTimeButton.addEventListener('click', () => {
    display.value = Date.now().toString();
});
const currentDateTimeIsoButton = document.getElementById('current-date-time-iso') as HTMLButtonElement;
currentDateTimeIsoButton.addEventListener('click', () => {
  display.value = new Date().toISOString();
});
const currentDateTimeLocaleButton = document.getElementById('current-date-time-locale') as HTMLButtonElement;
currentDateTimeLocaleButton.addEventListener('click', () => {
  display.value = new Date().toLocaleString();
});
const currentDayOfYearButton = document.getElementById('current-day-of-year') as HTMLButtonElement;
currentDayOfYearButton.addEventListener('click', () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  display.value = dayOfYear.toString();
});
const currentWeekOfYearButton = document.getElementById('current-week-of-year') as HTMLButtonElement;
currentWeekOfYearButton.addEventListener('click', () => {
    const now = new Date();
    const onejan = new Date(now.getFullYear(), 0, 1);
    const millisecsInDay = 86400000;
    const weekNumber = Math.ceil((((now.getTime() - onejan.getTime()) / millisecsInDay) + onejan.getDay() + 1) / 7);
    display.value = weekNumber.toString();
});
const currentMonthOfYearButton = document.getElementById('current-month-of-year') as HTMLButtonElement;
currentMonthOfYearButton.addEventListener('click', () => {
    const now = new Date();
    display.value = (now.getMonth() + 1).toString();
});
const currentQuarterOfYearButton = document.getElementById('current-quarter-of-year') as HTMLButtonElement;
currentQuarterOfYearButton.addEventListener('click', () => {
    const now = new Date();
    display.value = (Math.floor(now.getMonth() / 3) + 1).toString();
});
const currentWeekDayButton = document.getElementById('current-week-day') as HTMLButtonElement;
currentWeekDayButton.addEventListener('click', () => {
    const now = new Date();
    display.value = now.getDay().toString();
});
const currentDateStructureButton = document.getElementById('current-date-structure') as HTMLButtonElement;
currentDateStructureButton.addEventListener('click', () => {
    const now = new Date();
    display.value = JSON.stringify({
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
    });
});
const currentDateStringButton = document.getElementById('current-date-string') as HTMLButtonElement;
currentDateStringButton.addEventListener('click', () => {
  display.value = new Date().toDateString();
});
const currentTimeMillisecondsButton = document.getElementById('current-time-milliseconds') as HTMLButtonElement;
currentTimeMillisecondsButton.addEventListener('click', () => {
  display.value = new Date().getMilliseconds().toString();
});
const currentYearOfWeekButton = document.getElementById('current-year-of-week') as HTMLButtonElement;
currentYearOfWeekButton.addEventListener('click',()=>{
  const now = new Date();
  display.value = now.getFullYear().toString();
});
