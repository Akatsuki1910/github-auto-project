// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const toggleThemeButton = document.getElementById('toggle-theme');
    const percentageButton = document.getElementById('percentage');
    const inverseButton = document.getElementById('inverse');
    const cuberootButton = document.getElementById('cuberoot');
    const powerButton = document.getElementById('power');
    const logButton = document.getElementById('log');

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
        // ... (Existing inverse code)
    }
    if (cuberootButton) {
        // ... (Existing cuberoot code)
    }
    if (powerButton) {
        // ... (Existing power code)
    }
    if (logButton) {
        logButton.addEventListener('click', () => {
            display.value += 'log('; // Add log function to display
        });
    }
    // ... (rest of the code)
});