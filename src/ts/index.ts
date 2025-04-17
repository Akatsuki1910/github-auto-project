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
    const signButton = document.getElementById('sign');
    const floorButton = document.getElementById('floor');
    const maxButton = document.getElementById('max');
    const minButton = document.getElementById('min');
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
    if (signButton) {
        signButton.addEventListener('click', () => {
            display.value += 'sign('; // Add sign function
        });
    }
    if (floorButton) {
        floorButton.addEventListener('click', () => {
            display.value += 'floor('; // Add floor function
        });
    }
    if (maxButton) {
        maxButton.addEventListener('click', () => {
            display.value += 'max('; // Add max function
        });
    }
    if (minButton) {
        minButton.addEventListener('click', () => {
            display.value += 'min('; // Add min function
        });
    }

    // ... (rest of the code)
});