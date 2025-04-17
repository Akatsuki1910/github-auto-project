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
    // ... (rest of the code)
});