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

toggleHistoryButton.addEventListener('click', () => {
    historyVisible = !historyVisible;
    historyDisplay.style.display = historyVisible ? 'block' : 'none';
});

clearHistoryButton.addEventListener('click', () => {
    history = [];
    historyDisplay.innerHTML = '';
});
// ... (Rest of the code)