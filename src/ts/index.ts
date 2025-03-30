// ... (Existing code)
const roundToTrillionButton = document.getElementById('round-to-trillion') as HTMLButtonElement;
roundToTrillionButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = (Math.round(number / 1000000000000) * 1000000000000).toString();
});