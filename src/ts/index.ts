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
const toggleCurrentMonthButton = document.getElementById('toggle-current-month') as HTMLButtonElement;
toggleCurrentMonthButton.addEventListener('click', () => {
    const now = new Date();
    display.value = now.toLocaleString('default', { month: 'long' });
});
const toggleCurrentYearButton = document.getElementById('toggle-current-year') as HTMLButtonElement;
toggleCurrentYearButton.addEventListener('click', () => {
    const now = new Date();
    display.value = now.getFullYear().toString();
});
const toggleCurrentDayButton = document.getElementById('toggle-current-day') as HTMLButtonElement;
toggleCurrentDayButton.addEventListener('click', () => {
    const now = new Date();
    display.value = now.getDate().toString();
});
const toggleCurrentSecondButton = document.getElementById('toggle-current-second') as HTMLButtonElement;
toggleCurrentSecondButton.addEventListener('click', () => {
    const now = new Date();
    display.value = now.getSeconds().toString();
});
const toggleCurrentMillisecondButton = document.getElementById('toggle-current-millisecond') as HTMLButtonElement;
toggleCurrentMillisecondButton.addEventListener('click', () => {
    const now = new Date();
    display.value = now.getMilliseconds().toString();
});
const currentMinuteButton = document.getElementById('current-minute') as HTMLButtonElement;
currentMinuteButton.addEventListener('click', () => {
    const now = new Date();
    display.value = now.getMinutes().toString();
});
const toggleCurrentHourButton = document.getElementById('toggle-current-hour') as HTMLButtonElement;
toggleCurrentHourButton.addEventListener('click', () => {
  const now = new Date();
  display.value = now.getHours().toString();
});
const currentSecondButton = document.getElementById('current-second') as HTMLButtonElement;
currentSecondButton.addEventListener('click', () => {
    const now = new Date();
    display.value = now.getSeconds().toString();
});
// ... (Rest of the existing code)