// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const toggleThemeButton = document.getElementById('toggle-theme');
    const percentageButton = document.getElementById('percentage');
    const inverseButton = document.getElementById('inverse');
    const cuberootButton = document.getElementById('cuberoot');

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
        cuberootButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                display.value = Math.cbrt(currentValue).toString();
            }
        });
    }
    // ... (rest of the code)
});