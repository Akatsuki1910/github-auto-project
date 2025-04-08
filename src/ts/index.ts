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
// ... (Rest of the code)