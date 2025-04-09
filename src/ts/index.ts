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