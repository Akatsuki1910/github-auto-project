// ... (Existing code)
const calculateCosineButton = document.getElementById('calculate-cosine') as HTMLButtonElement;
calculateCosineButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = Math.cos(number).toString();
});