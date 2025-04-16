// ... (Existing code)
window.addEventListener('load', () => {
    const storedHistory = localStorage.getItem('calculatorHistory');
    if (storedHistory) {
        history = JSON.parse(storedHistory);
        updateHistoryDisplay();
    }
    const historyLengthDisplay = document.getElementById('history-length');
    if (historyLengthDisplay) {
        historyLengthDisplay.textContent = `History Length: ${history.length}`;
    }
    // Memory Recall Button Functionality(MR)
    const mrButton = document.getElementById('mr');
    if (mrButton) {
        mrButton.addEventListener('click', () => {
            const memory = localStorage.getItem('calculatorMemory');
            if (memory) {
                display.value = memory;
            }
        });
    }
});