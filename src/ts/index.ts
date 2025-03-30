// ... (Existing code)
const roundToBillionButton = document.getElementById('round-to-billion') as HTMLButtonElement;
roundToBillionButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = (Math.round(number / 1000000000) * 1000000000).toString();
});