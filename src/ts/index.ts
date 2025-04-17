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
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
    const copyButton = document.getElementById('copy');
    // ... existing code
    const toggleThemeButton = document.getElementById('toggle-theme');

    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-scheme');
            document.body.classList.toggle('light-scheme');
        });
    }

    if (copyButton) {
        // ... (copyButton logic)
    }

    if (clearHistoryButton) {
        // ... (clearHistoryButton logic)
    }

    function addToHistory(entry, expression) {
        // ... (addToHistory logic)
    }

    function updateHistoryLength(length) {
       // ... (updateHistoryLength logic)
    }

    // Load history from localStorage on page load
    const savedHistory = localStorage.getItem('calculatorHistory');
    if (savedHistory) {
        // ... (load history logic)
    }
});