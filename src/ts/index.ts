// ... (Existing code)
const roundToTwoButton = document.getElementById('round-to-two') as HTMLButtonElement;
roundToTwoButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = number.toFixed(2);
});