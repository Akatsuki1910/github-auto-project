// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const toggleThemeButton = document.getElementById('toggle-theme');
    // ... (Existing code)
    const duplicateButton = document.getElementById('duplicate');
    if (duplicateButton) {
        duplicateButton.addEventListener('click', () => {
            const currentValue = display.value;
            display.value += currentValue;
        });
    }
    const clearAllButton = document.getElementById('clear-all');
    if (clearAllButton) {
        clearAllButton.addEventListener('click', () => {
            display.value = '';
            // Add this line to clear currentExpressionDisplay as well
            document.getElementById('currentExpressionDisplay').innerText = '';
        });
    }
    // ... (rest of the code)
});