// ... (Existing code)
const calculateSquareButton = document.getElementById('calculate-square') as HTMLButtonElement;
calculateSquareButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue).toString();
    }
});