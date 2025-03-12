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
// ... (rest of the code)
//MM/DD
const currentMonthDayButton = document.getElementById('current-date-month-day') as HTMLButtonElement;
currentMonthDayButton.addEventListener('click', () => {
    const now = new Date();
    const month = String(now.getMonth()+1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    display.value = `${month}/${day}`;
});
//DD/MM
const currentDayMonthButton = document.getElementById('current-date-day-month') as HTMLButtonElement;
currentDayMonthButton.addEventListener('click', () => {
    const now = new Date();
    const month = String(now.getMonth()+1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    display.value = `${day}/${month}`;
});
//DD
const currentDayButton = document.getElementById('current-date-day') as HTMLButtonElement;
currentDayButton.addEventListener('click', () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    display.value = `${day}`;
});
//DD/MM/YYYY
const currentDayMonthYearButton = document.getElementById('current-date-dd-mm-yyyy') as HTMLButtonElement;
currentDayMonthYearButton.addEventListener('click', () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  display.value = `${day}/${month}/${year}`;
});
//YYYY-MM-DD
const currentYYYYMMDDButton = document.getElementById('current-date-yyyy-mm-dd') as HTMLButtonElement;
currentYYYYMMDDButton.addEventListener('click', () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  display.value = `${year}-${month}-${day}`;
});
//MM/YY
const currentMMYYButton = document.getElementById('current-date-mm-yy') as HTMLButtonElement;
currentMMYYButton.addEventListener('click', () => {
  const now = new Date();
  const year = String(now.getFullYear()).slice(-2);
  const month = String(now.getMonth() + 1).padStart(2, '0');
  display.value = `${month}/${year}`;
});