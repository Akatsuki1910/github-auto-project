// ... (Existing code)
const acoshButton = document.getElementById('acosh') as HTMLButtonElement;
acoshButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >= 1) {
        display.value = Math.acosh(currentValue).toString();
    } else {
        display.value = "Error: Input must be >= 1";
    }
});
// ... (Rest of existing code)