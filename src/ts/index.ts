// ... (Existing code)
const calculateMedianButton = document.getElementById('calculate-median') as HTMLButtonElement;
calculateMedianButton.addEventListener('click', () => {
    // ... (median calculation logic)
});

const toggleHistoryButton = document.getElementById('toggle-history') as HTMLButtonElement;
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let historyVisible = false;

toggleHistoryButton.addEventListener('click', () => {
    historyVisible = !historyVisible;
    historyDisplay.style.display = historyVisible ? 'block' : 'none';
});
// ... (Rest of the code)