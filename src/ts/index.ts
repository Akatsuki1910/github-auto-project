// ... (Existing code)
const calculateCotangentButton = document.getElementById('calculate-cotangent') as HTMLButtonElement;
calculateCotangentButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = (1 / Math.tan(number)).toString();
});