// ... (Existing code)
const tenPowerButton = document.getElementById('ten-power') as HTMLButtonElement;
tenPowerButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        display.value = Math.pow(10, num).toString();
    }
});