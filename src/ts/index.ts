// ... (Existing code)
const roundToThousandButton = document.getElementById('round-to-thousand') as HTMLButtonElement;
roundToThousandButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = (Math.round(number / 1000) * 1000).toString();
});