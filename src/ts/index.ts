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
// ... (Rest of the existing code)