// ... (Existing code)
const roundToFiveButton = document.getElementById('round-to-five') as HTMLButtonElement;
roundToFiveButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = (Math.round(number / 5) * 5).toString();
});