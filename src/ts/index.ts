// ... (Existing code)
const calculateMedianButton = document.getElementById('calculate-median') as HTMLButtonElement;
calculateMedianButton.addEventListener('click', () => {
    // ... (median calculation logic)
});

const toggleHistoryButton = document.getElementById('toggle-history') as HTMLButtonElement;
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let historyVisible = false;
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
let history: string[] = [];
let lastCalculation: string = '';
const lastCalculationButton = document.getElementById('last-calculation') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
const toggleDarkModeButton = document.getElementById('toggle-dark-mode') as HTMLButtonElement;
const currentMonthButton = document.getElementById('current-month') as HTMLButtonElement;
const currentDayButton = document.getElementById('current-day') as HTMLButtonElement;

toggleHistoryButton.addEventListener('click', () => {
    historyVisible = !historyVisible;
    historyDisplay.style.display = historyVisible ? 'block' : 'none';
});

clearHistoryButton.addEventListener('click', () => {
    history = [];
    historyDisplay.innerHTML = '';
});

lastCalculationButton.addEventListener('click',()=>{
    if(lastCalculation){
        display.value = lastCalculation;
        console.log(lastCalculation);
    }
});

toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
});

currentMonthButton.addEventListener('click', () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  display.value = currentMonth;
});

currentDayButton.addEventListener('click', () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    display.value = currentDay.toString();
});
// ... (Rest of the code)