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
    const toggleThemeButton = document.getElementById('toggle-theme');

    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-scheme');
            document.body.classList.toggle('light-scheme');
            // Save theme preference to localStorage
            localStorage.setItem('theme', document.body.classList.contains('dark-scheme') ? 'dark' : 'light');
        });
    }

    // Load theme preference from localStorage on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-scheme');
        document.body.classList.remove('light-scheme');
    } else {
        document.body.classList.add('light-scheme');
        document.body.classList.remove('dark-scheme');
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