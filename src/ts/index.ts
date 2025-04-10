// ... (Existing code)
const calculateFourthPowerButton = document.getElementById('calculate-fourth-power') as HTMLButtonElement;
calculateFourthPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue * currentValue * currentValue).toString();
    }
});
// ... (Rest of the code)