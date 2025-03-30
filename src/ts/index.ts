// ... (Existing code)
const roundToMillionButton = document.getElementById('round-to-million') as HTMLButtonElement;
roundToMillionButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = (Math.round(number / 1000000) * 1000000).toString();
});