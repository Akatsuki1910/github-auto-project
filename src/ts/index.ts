// ... (Existing code)
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) {
        display.value = Math.log10(currentValue).toString();
    } else {
        display.value = "Error";
    }
});