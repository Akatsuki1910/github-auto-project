// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const toggleThemeButton = document.getElementById('toggle-theme');
    // ... (Existing percentage code)
    // ... (Existing inverse code)
    // ... (Existing cuberoot code)
    // ... (Existing power code)
    // ... (Existing log code)
    // ... (Existing tenPowerButton code)
    const absButton = document.getElementById('abs');
    const roundButton = document.getElementById('round');
    if (lnButton) {
        lnButton.addEventListener('click', () => {
            display.value += 'ln('; // Add ln function
        });
    }
    if (absButton) {
        absButton.addEventListener('click', () => {
            display.value += 'abs('; // Add abs function
        });
    }
    if (roundButton) {
        roundButton.addEventListener('click', () => {
            display.value += 'round('; // Add round function
        });
    }

    // ... (rest of the code)
});