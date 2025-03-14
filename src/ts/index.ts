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
// ... (Rest of the existing code)