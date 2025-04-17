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
    const historyLengthSpan = document.getElementById('history-length'); // Get history length element

    if (squaredButton) {
        // ... existing code
    }
    if (cubeRootButton) {
        // ... existing code
    }
    if (doubleButton) {
        // ... existing code
    }
    if (cubeButton) {
        // ... existing code
    }

    if (clearHistoryButton) {
        clearHistoryButton.addEventListener('click', () => {
            const historyDisplay = document.getElementById('history-display');
            if (historyDisplay) {
                historyDisplay.innerHTML = ''; // Clear history display
            }
            updateHistoryLength(0); // Update history length to 0
        });
    }

    function addToHistory(entry) {
        const historyDisplay = document.getElementById('history-display');
        if (historyDisplay) {
            const newEntry = document.createElement('p');
            newEntry.textContent = entry;
            historyDisplay.appendChild(newEntry);
            updateHistoryLength(historyDisplay.children.length); // Update history length
        }
    }

    function updateHistoryLength(length) {
        if (historyLengthSpan) {
            historyLengthSpan.textContent = `History Length: ${length}`;
        }
    }
});