// ... (Existing code)
const roundToNearestIntButton = document.getElementById('round-to-nearest-int') as HTMLButtonElement;
roundToNearestIntButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = Math.round(number).toString();
});