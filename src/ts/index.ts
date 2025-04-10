// ... (Existing code)
const calculateSeventhPowerButton = document.getElementById('calculate-seventh-power') as HTMLButtonElement;
calculateSeventhPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 7).toString();
    }
});
// ... (Rest of the code)