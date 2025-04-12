// ... (Existing code)
const calculateCotangentButton = document.getElementById('calculate-cotangent') as HTMLButtonElement;
calculateCotangentButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = (1 / Math.tan(currentValue)).toString();
});