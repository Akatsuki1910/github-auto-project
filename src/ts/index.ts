// ... (Existing code)
const roundToHundredButton = document.getElementById('round-to-hundred') as HTMLButtonElement;
roundToHundredButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = (Math.round(number / 100) * 100).toString();
});