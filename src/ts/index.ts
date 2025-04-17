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
    const tenPowerButton = document.getElementById('ten-power');
    const lnButton = document.getElementById('ln');

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
        // ... (Existing log code)
    }
    if (tenPowerButton) {
       // ... (Existing tenPowerButton code)
    }
    if (lnButton) {
        lnButton.addEventListener('click', () => {
            display.value += 'ln('; // Add ln function
        });
    }
    // ... (rest of the code)
});