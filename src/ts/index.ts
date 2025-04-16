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
    // Memory Clear Button Functionality (MC)
    const mcButton = document.getElementById('mc');
    if (mcButton) {
        mcButton.addEventListener('click', () => {
            localStorage.removeItem('calculatorMemory');
            // Optionally provide feedback to the user that memory has been cleared
            console.log('Memory cleared');
        });
    }
    // Memory Plus Button Functionality (M+)
    const mPlusButton = document.getElementById('m-plus');
    if (mPlusButton) {
        mPlusButton.addEventListener('click', () => {
            const currentValue = display.value;
            const memory = localStorage.getItem('calculatorMemory') || '0';
            const newMemory = String(parseFloat(memory) + parseFloat(currentValue));
            localStorage.setItem('calculatorMemory', newMemory);
            console.log(`Memory updated: ${newMemory}`);
        });
    }
});