// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const toggleThemeButton = document.getElementById('toggle-theme');
    const percentageButton = document.getElementById('percentage');
    const inverseButton = document.getElementById('inverse');

    if (toggleThemeButton) {
        // ... (Existing theme toggle code)
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        // ... (Existing dark theme code)
    } else {
        // ... (Existing light theme code)
    }
    if (percentageButton) {
        // ... (Existing percentage code)
    }
    if (inverseButton) {
        inverseButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            if (!isNaN(currentValue) && currentValue !== 0) {
                display.value = (1 / currentValue).toString();
            } else if (currentValue === 0) {
              display.value = "Cannot divide by zero";
            }
        });
    }
    // ... (rest of the code)
});