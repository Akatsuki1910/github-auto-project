// ... (Existing code)
//Added feature: History
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const openHistoryButton = document.getElementById('open-history') as HTMLButtonElement;
let history: string[] = [];
openHistoryButton.addEventListener('click', () => {
    if (historyDisplay.style.display === 'none') {
        historyDisplay.style.display = 'block';
        historyDisplay.innerHTML = history.join('<br>'); // Display history items
    } else {
        historyDisplay.style.display = 'none';
    }
});
const equalsButton = document.getElementById('=') as HTMLButtonElement; // Get the equals button
equalsButton.addEventListener('click', () => {
    try {
        // ... existing calculation logic
        history.push(display.value + ' = ' + lastAnswer); // Add to history
    } catch (error) {
        // ... existing error handling
    }
});
// ... rest of the existing code