// ... (Existing code)
const calculateCubeButton = document.getElementById('calculate-cube') as HTMLButtonElement;
calculateCubeButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue * currentValue).toString();
    }
});