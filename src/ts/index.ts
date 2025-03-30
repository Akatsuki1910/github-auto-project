// ... (Existing code)
const roundToTenButton = document.getElementById('round-to-ten') as HTMLButtonElement;
roundToTenButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = (Math.round(number / 10) * 10).toString();
});