// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const nthrootButton = document.getElementById('nthroot');
    // ... (Existing code)
    const squaredButton = document.getElementById('squared');
    const cubeRootButton = document.getElementById('cube-root');
    const doubleButton = document.getElementById('double');
    const cubeButton = document.getElementById('cube');
    const clearHistoryButton = document.getElementById('clear-history');
    const historyLengthSpan = document.getElementById('history-length'); 

    // ... existing code

    if (clearHistoryButton) {
        clearHistoryButton.addEventListener('click', () => {
            const historyDisplay = document.getElementById('history-display');
            if (historyDisplay) {
                historyDisplay.innerHTML = ''; // Clear history display
            }
            localStorage.removeItem('calculatorHistory'); // Clear history from localStorage
            updateHistoryLength(0); // Update history length to 0
        });
    }

    function addToHistory(entry) {
        const historyDisplay = document.getElementById('history-display');
        if (historyDisplay) {
            const newEntry = document.createElement('p');
            newEntry.textContent = entry;
            historyDisplay.appendChild(newEntry);
            let history = localStorage.getItem('calculatorHistory') || '';
            history += entry + '\n';
            localStorage.setItem('calculatorHistory', history);
            updateHistoryLength(historyDisplay.children.length); // Update history length
        }
    }

    function updateHistoryLength(length) {
        if (historyLengthSpan) {
            historyLengthSpan.textContent = `History Length: ${length}`;
        }
    }

    // Load history from localStorage on page load
    const savedHistory = localStorage.getItem('calculatorHistory');
    if (savedHistory) {
        const historyDisplay = document.getElementById('history-display');
        if (historyDisplay) {
            historyDisplay.innerHTML = savedHistory.replace(/\n/g, '<br>');
            updateHistoryLength(historyDisplay.innerHTML.split('<br>').length - 1);
        }
    }
});