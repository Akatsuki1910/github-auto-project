// ... (Existing code)
const calculateHalveButton = document.getElementById('calculate-halve') as HTMLButtonElement;
calculateHalveButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 2).toString();
    }
});