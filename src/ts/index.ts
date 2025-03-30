// ... (Existing code)
const naturalLogarithmButton = document.getElementById('natural-logarithm') as HTMLButtonElement;
naturalLogarithmButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    if (number <= 0) {
        display.value = "Invalid input (non-positive)";
        return;
    }
    display.value = Math.log(number).toString();
});