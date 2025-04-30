// ... (Existing code)
const tenPowerButton = document.getElementById('ten-power') as HTMLButtonElement;
tenPowerButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.pow(10, currentValue).toString();
    } catch (e) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)