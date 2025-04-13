// ... (Existing code)
const calculateDoubleButton = document.getElementById('calculate-double') as HTMLButtonElement;
calculateDoubleButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * 2).toString();
    }
});