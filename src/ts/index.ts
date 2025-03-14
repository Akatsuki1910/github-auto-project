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
// ... existing functions for month, year, day, second, millisecond, minute, hour, etc.
const currentMonthYearButton = document.getElementById('current-month-year') as HTMLButtonElement;
currentMonthYearButton.addEventListener('click', () => {
  const now = new Date();
  display.value = now.toLocaleString('default', { month: 'long', year: 'numeric' });
});
const toggleScreenBrightnessButton = document.getElementById('toggle-screen-brightness') as HTMLButtonElement;
toggleScreenBrightnessButton.addEventListener('click', () => {
document.body.classList.toggle('low-brightness');
});
const currentQuarterButton = document.getElementById('current-quarter') as HTMLButtonElement;
currentQuarterButton.addEventListener('click', () => {
    const now = new Date();
    const quarter = Math.floor((now.getMonth() + 3) / 3);
    display.value = `Q${quarter}`;
});
const currentWeekDayButton = document.getElementById('current-week-day') as HTMLButtonElement;
currentWeekDayButton.addEventListener('click', () => {
    const now = new Date();
    const weekday = now.toLocaleString('default', { weekday: 'long' });
    display.value = weekday;
});
const currentGMTTimeButton = document.getElementById('current-gmt-time') as HTMLButtonElement;
currentGMTTimeButton.addEventListener('click', () => {
    const now = new Date();
    display.value = now.toUTCString();
});
const currentLocalTimeButton = document.getElementById('current-local-time') as HTMLButtonElement;
currentLocalTimeButton.addEventListener('click', () => {
    const now = new Date();
    display.value = now.toLocaleTimeString();
});
const currentDayOfYearButton = document.getElementById('current-day-of-year') as HTMLButtonElement;
currentDayOfYearButton.addEventListener('click', () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    display.value = String(dayOfYear);
});
const currentBrowserButton = document.getElementById('current-browser') as HTMLButtonElement;
currentBrowserButton.addEventListener('click', () => {
    display.value = navigator.userAgent;
});
const currentOSButton = document.getElementById('current-os') as HTMLButtonElement;
currentOSButton.addEventListener('click', () => {
    display.value = navigator.platform; // Simplified OS information
});
// ... (Rest of the existing code)