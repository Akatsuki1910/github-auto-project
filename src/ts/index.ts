// ... (Existing code)
const calculatePowerButton = document.getElementById('calculate-power') as HTMLButtonElement;
calculatePowerButton.addEventListener('click', () => {
    const base = parseFloat(prompt('Enter base:') || '0');
    const exponent = parseFloat(prompt('Enter exponent:') || '0');
    if (!isNaN(base) && !isNaN(exponent)) {
        display.value = Math.pow(base, exponent).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)