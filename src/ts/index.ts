// ... (Existing code)
const calculateSineButton = document.getElementById('calculate-sine') as HTMLButtonElement;
calculateSineButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = Math.sin(number).toString();
});